import { sleep } from '~/functions/sleep';
import { updateSession } from '~/stores/session';
import { resetUser } from '~/stores/user';
import { toastKit } from '~/utils/toastKit';

import { supabaseClient } from './supabaseClient';

export const onSignOut = async () => {
  const { errorToast, successToast } = toastKit('サインアウトしています...');

  const { error } = await supabaseClient.auth.signOut();
  await sleep(1000);

  if (error) {
    errorToast('サインアウトに失敗しました');
    return;
  }

  resetUser();
  updateSession(false);
  successToast('サインアウトしました');
};
