import { makeRedirectUri, startAsync } from 'expo-auth-session';
import type { VFC } from 'react';
import React, { useCallback } from 'react';
import { Button as NativeButton, Platform, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Apple, Google, Mail, Runder } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { ACCESS_TOKEN_KEY, PREVIOUS_AUTH_PROVIDER_KEY } from '~/constants/SEQUER_STORE';
import { SUPABASE_URL } from '~/constants/SUPABASE';
import { updateSession } from '~/stores/session';
import { saveSequreStore } from '~/utils/sequreStore';
import { supabaseClient } from '~/utils/supabase';

import type { SignUpScreenProps } from './ScreenProps';

const useProxy = Platform.select({ default: false });
const redirectUri = makeRedirectUri({ useProxy });
const provider = 'google';

export const SignUp: VFC<SignUpScreenProps> = () => {
  const onGoogleSignin = useCallback(async () => {
    startAsync({
      authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${redirectUri}`,
      returnUrl: redirectUri,
    })
      .then(async (response: any) => {
        // console.info('response', response);

        if (!response) {
          return;
        }

        // サインイン処理
        const {
          user,
          session,
          error: signInError,
        } = await supabaseClient.auth.signIn({
          refreshToken: response.params?.refresh_token,
        });

        if (signInError) {
          console.error(signInError);
          return;
        }

        if (!user) {
          console.error('user is null');
          return;
        }

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

        if (!session) {
          console.error('session is null');
          return;
        }

        // デバイスのsecure storeに保存
        // session.user.app_metadata.provider
        // session.access_token
        await saveSequreStore(PREVIOUS_AUTH_PROVIDER_KEY, 'google');
        await saveSequreStore(ACCESS_TOKEN_KEY, session.access_token);

        updateSession(true);
      })
      .catch((error: any) => {
        console.error('error', error);
      });
  }, []);

  return (
    <View style={style.container}>
      <View style={style.iconArea}>
        <Runder />
      </View>

      <View style={style.messageArea}>
        <Text style={style.message}>あなたのライバルたちが待っています</Text>
        <Text style={style.message}>さっそく走り出しましょう</Text>
      </View>

      <Button
        leftIcon={<Google />}
        label="Googleアカウントでログイン"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        bgTheme="bg1"
        onPress={onGoogleSignin}
      />
      <Button
        leftIcon={<Apple />}
        label="Appleアカウントでログイン"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        lightBg="#333333"
        lightText="#FFF"
        onPress={onGoogleSignin}
      />
      <Button
        leftIcon={<Mail />}
        label="メールアドレスでログイン"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        lightBg="#808080"
        lightText="#FFF"
        onPress={onGoogleSignin}
      />

      <View style={style.registerArea}>
        <Text style={style.registerText}>新規登録の場合は</Text>
        <NativeButton title="こちら" onPress={onGoogleSignin} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: '6%',
  },
  iconArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '6%',
  },
  messageArea: {
    marginBottom: '40%',
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
  },
  buttonOutline: {
    marginBottom: '3%',
  },
  buttonBg: {
    height: 60,
  },
  buttonText: {
    width: 'auto',
    marginLeft: '4%',
  },
  registerArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    width: 'auto',
    fontSize: 18,
    textAlign: 'center',
    marginRight: '-1%',
  },
});
