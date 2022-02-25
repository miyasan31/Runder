import { sleep } from '~/functions/sleep';
import { updateSession } from '~/stores/session';
import { resetUser } from '~/stores/user';
import { toastKit } from '~/utils/toastKit';

import { supabaseClient } from './supabaseClient';

export const onSignOut = async () => {
  const { errorToast, successToast } = toastKit('サインアウトしています...');

  const signOutPromise = supabaseClient.auth.signOut();
  const sleepPromise = sleep(1000);
  const [{ error }] = await Promise.all([signOutPromise, sleepPromise]);

  if (error) {
    errorToast('サインアウトに失敗しました');
    return;
  }

  successToast('サインアウトに成功しました');
  updateSession(false);
  resetUser();
};
