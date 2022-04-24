import { useSetRecoilState } from 'recoil';

import { sleep } from '~/functions/sleep';
import { user } from '~/stores/user';
import { supabaseClient } from '~/utils/supabase';
import { toastKit } from '~/utils/toastKit';

export const useSignOut = () => {
  const setUserInfo = useSetRecoilState(user);

  const onSignOut = async () => {
    const { errorToast, successToast } = toastKit('サインアウトしています...');

    const signOutPromise = supabaseClient.auth.signOut();
    const sleepPromise = sleep(1000);
    const [{ error }] = await Promise.all([signOutPromise, sleepPromise]);

    if (error) {
      errorToast('サインアウトに失敗しました');
      return;
    }

    successToast('サインアウトに成功しました');
    setUserInfo((prevState) => {
      return { ...prevState, isSignIn: false };
    });
  };

  return { onSignOut };
};
