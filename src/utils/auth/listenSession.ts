import { useEffect, useState } from 'react';
import { subscribe, useSnapshot } from 'valtio';

import { ACCESS_TOKEN_KEY } from '~/constants/SEQUER_STORE';
import { session } from '~/stores/session';
import { signInUser } from '~/stores/user';
import { getSequreStore } from '~/utils/sequreStore';
import { supabaseClient } from '~/utils/supabaseClient';

type SessionState = {
  isSignin: boolean;
  route: 'Auth' | 'Main';
};

const listenSession = async (): Promise<SessionState> => {
  const tokenResult = await getSequreStore(ACCESS_TOKEN_KEY);

  if (!tokenResult) {
    return { isSignin: false, route: 'Auth' };
  }

  const { data, error } = await supabaseClient.from('user').select('*');

  if (error) {
    return { isSignin: false, route: 'Auth' };
  }

  if (!data) {
    return { isSignin: false, route: 'Auth' };
  }

  signInUser(data[0]);

  return { isSignin: true, route: 'Main' };
};

const unsubscribe = subscribe(session, () => session.isSignin);

export const useSession = () => {
  const sessionSnapshot = useSnapshot(session);
  const [sessionState, setSessionState] = useState<SessionState | null>(null);

  useEffect(() => {
    setSessionState(null);
    (async () => {
      const result = await listenSession();
      console.info(result);
      setSessionState(result);
    })();
    return () => unsubscribe();
  }, [sessionSnapshot.isSignin]);

  return sessionState;
};
