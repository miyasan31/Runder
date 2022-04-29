import { makeRedirectUri, startAsync } from 'expo-auth-session';
import { toast } from 'react-hot-toast/src/core/toast';
import { Platform } from 'react-native';
import { useSetRecoilState } from 'recoil';

import { AUTH_PROVIDER_KEY, SUPABASE_URL } from '~/constants/ENV';
import { sleep } from '~/functions/sleep';
import { user } from '~/stores/user';
import { deleteSecureStore, saveSecureStore } from '~/utils/secureStore';
import { supabaseClient } from '~/utils/supabase';

const useProxy = Platform.select({ default: false });
const redirectUri = makeRedirectUri({ useProxy });
const provider = 'google';

export const useSignInGoogle = () => {
  const setUserInfo = useSetRecoilState(user);

  const onSignInGoogle = () => {
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
        setUserInfo((prevState) => {
          return { ...prevState, isSignIn: true };
        });
      })
      .catch((error: any) => {
        deleteSecureStore(AUTH_PROVIDER_KEY);
        console.error('error', error);
      });
  };

  return { onSignInGoogle };
};
