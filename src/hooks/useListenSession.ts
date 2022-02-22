import { useCallback, useEffect, useState } from 'react';
import { subscribe, useSnapshot } from 'valtio';

import { sleep } from '~/functions/sleep';
import { session, updateSession } from '~/stores/session';
import { getUser } from '~/stores/user';
import type { User } from '~/types/fetcher';
import { supabaseClient, supabaseSelect } from '~/utils/supabase';

type SessionState = {
  isSignin: boolean;
  route: 'Auth' | 'Main';
};

const unsubscribe = subscribe(session, () => session.isSignin);

export const useListenSession = () => {
  const sessionSnapshot = useSnapshot(session);
  const [sessionState, setSessionState] = useState<SessionState | null>(null);

  const listenSession = useCallback(async (): Promise<SessionState> => {
    setSessionState(null);

    const sessionUser = await supabaseClient.auth.session()?.user;

    // is Session Empty
    if (!sessionUser) {
      return { isSignin: false, route: 'Auth' };
    }

    const { data, error } = await supabaseSelect<User>('user', {
      columns: 'id, name, avatar, profile, gender',
      filter: (query) => query.eq('id', sessionUser && sessionUser.id),
    });
    // --- or ---
    // const { data, error } = await supabaseClient
    //   .from<User>('user')
    //   .select('*')
    //   .eq('id', sessionInfo.user.id);

    // is Error
    if (error) {
      return { isSignin: false, route: 'Auth' };
    }
    // TODO
    // is Not User -> RegisterScreen Navigation
    if (!data) {
      return { isSignin: false, route: 'Auth' };
    }

    // is Success
    getUser(data[0]);
    updateSession(true);
    return { isSignin: true, route: 'Main' };
  }, []);

  useEffect(() => {
    (async () => {
      const result = await listenSession();
      await sleep();
      setSessionState(result);
    })();

    return () => unsubscribe();
  }, [sessionSnapshot.isSignin]);

  return sessionState;
};
