import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { sleep } from '~/functions/sleep';
import type { AuthUserState } from '~/stores/user';
import { user } from '~/stores/user';
import { supabaseClient, supabaseSelect } from '~/utils/supabase';

type SessionState = {
  isSignIn: boolean;
  route: 'Main' | 'SignInScreen' | 'UserRegisterScreen';
};

const FROM = 'user';
const SELECT = 'id, name, avatar, profile, sex';
const EQUAL = 'id';

export const useListenSession = () => {
  const [authUser, setAuthUser] = useRecoilState(user);
  const [sessionState, setSessionState] = useState<SessionState | null>(null);

  const listenSession = useCallback(async (): Promise<SessionState> => {
    setSessionState(null);

    const sessionUser = await supabaseClient.auth.session()?.user;

    // is Session Empty
    if (!sessionUser) {
      return { isSignIn: false, route: 'SignInScreen' };
    }

    const { data, error } = await supabaseSelect<AuthUserState>(FROM, {
      columns: SELECT,
      filter: (query) => query.eq(EQUAL, sessionUser.id),
    });

    // --- or ---
    // const { data, error } = await supabaseClient
    //   .from<User>('user')
    //   .select('*')
    //   .eq('id', sessionInfo.user.id);

    // is Error
    if (error || !data) {
      return { isSignIn: false, route: 'SignInScreen' };
    }

    // is Not User -> UserRegisterScreen Navigation
    if (data.length === 0) {
      setAuthUser({
        isSignIn: false,
        user: null,
      });
      return { isSignIn: false, route: 'UserRegisterScreen' };
    }

    // is Success
    setAuthUser({
      isSignIn: true,
      user: data[0],
    });
    return { isSignIn: true, route: 'Main' };
  }, []);

  useEffect(() => {
    if (!authUser?.user) {
      (async () => {
        const result = await listenSession();
        await sleep(1000);
        setSessionState(result);
      })();
    }
  }, [authUser?.isSignIn]);

  return sessionState;
};
