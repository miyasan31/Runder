import { makeRedirectUri, startAsync } from 'expo-auth-session';
import { toast } from 'react-hot-toast/src/core/toast';
import { Platform } from 'react-native';

import { AUTH_PROVIDER_KEY } from '~/constants/SECURE_STORE';
import { SUPABASE_URL } from '~/constants/SUPABASE';
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

      // ここはサインイン処理が成功したら呼ばれる
      // ユーザー情報を登録
      // user.id
      // user.user_metadata.name
      // user.email
      // user.user_metadata.avatar_url
      // const { error: userCreateError } = await supabaseClient.from('user').insert([
      //   {
      //     id: user.id,
      //     name: user.user_metadata.name,
      //     email: user.email,
      //     avatar: user.user_metadata.avatar_url,
      //   },
      // ]);

      // if (userCreateError) {
      //   console.error(userCreateError);
      // }

      toast.success('サインインに成功しました', { icon: '🥳' });
      const secureStorePromise = saveSecureStore(AUTH_PROVIDER_KEY, 'google');
      const sleepPromise = sleep(1000);
      await Promise.all([secureStorePromise, sleepPromise]);
      updateSession(true);
    })
    .catch((error: any) => {
      deleteSecureStore(AUTH_PROVIDER_KEY);
      console.error('error', error);
    });
};
