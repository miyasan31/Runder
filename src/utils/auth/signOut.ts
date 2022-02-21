import { ACCESS_TOKEN_KEY } from '~/constants/SEQUER_STORE';
import { signOutSession } from '~/stores/session';
import { signOutUser } from '~/stores/user';
import { deleteSequreStore } from '~/utils/sequreStore';
import { supabaseClient } from '~/utils/supabaseClient';
import { toastKit } from '~/utils/toastKit';

export const onSignOut = async () => {
  const { errorToast, successToast } = toastKit('サインアウトしています...');

  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    errorToast('サインアウトに失敗しました');
    return;
  }

  await deleteSequreStore(ACCESS_TOKEN_KEY);
  signOutUser();
  signOutSession();
  successToast('サインアウトしました');
};
