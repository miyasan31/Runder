import { makeRedirectUri, startAsync } from 'expo-auth-session';
import { toast } from 'react-hot-toast/src/core/toast';
import { Platform } from 'react-native';

import { AUTH_PROVIDER_KEY, SUPABASE_URL } from '~/constants/ENV';
import { sleep } from '~/functions/sleep';
import { updateSession } from '~/stores/session';
import { deleteSecureStore, saveSecureStore } from '~/utils/secureStore';

import { supabaseClient } from './supabaseClient';

const useProxy = Platform.select({ default: false });
const redirectUri = makeRedirectUri({ useProxy });
const provider = 'google';

export const onSignInGoogle = async () => {
  startAsync({
    authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${redirectUri}`,
    returnUrl: redirectUri,
  })
    .then(async (response: any) => {
      if (!response) return;

      const { error } = await supabaseClient.auth.signIn({
        refreshToken: response.params?.refresh_token,
      });

      if (error) {
        toast.error('サインインに失敗しました', { icon: '😱' });
        return;
      }

      toast.success('サインインに成功しました', { icon: '🥳' });
      const secureStorePromise = saveSecureStore(AUTH_PROVIDER_KEY, 'google');
      const sleepPromise = sleep(600);
      await Promise.all([secureStorePromise, sleepPromise]);
      updateSession(true);
    })
    .catch((error: any) => {
      deleteSecureStore(AUTH_PROVIDER_KEY);
      console.error('error', error);
    });
};
