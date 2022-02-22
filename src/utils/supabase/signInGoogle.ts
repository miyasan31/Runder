import { makeRedirectUri, startAsync } from 'expo-auth-session';
import { toast } from 'react-hot-toast/src/core/toast';
import { Platform } from 'react-native';

import { PREVIOUS_AUTH_PROVIDER_KEY } from '~/constants/SEQUER_STORE';
import { SUPABASE_URL } from '~/constants/SUPABASE';
import { updateSession } from '~/stores/session';
import { saveSequreStore } from '~/utils/sequreStore';

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

      const {
        user,
        session,
        error: signInError,
      } = await supabaseClient.auth.signIn({
        refreshToken: response.params?.refresh_token,
      });

      if (signInError) {
        toast.error('サインインに失敗しました', {
          icon: '❌',
        });
        return;
      }

      // TODO
      if (!user) {
        toast.error('エラーが発生しました', {
          icon: '❌',
        });
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

      // TODO
      if (!session) {
        toast.error('エラーが発生しました', {
          icon: '❌',
        });
        return;
      }

      toast.success('サインインしました', {
        icon: '✅',
      });
      await saveSequreStore(PREVIOUS_AUTH_PROVIDER_KEY, 'google');
      updateSession(true);
    })
    .catch((error: any) => {
      console.error('error', error);
    });
};
