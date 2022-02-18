import { makeRedirectUri, startAsync } from 'expo-auth-session';
import type { VFC } from 'react';
import React from 'react';
import { Button as NativeButton, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Apple, Google, Mail, Runder } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { SUPABASE_URL } from '~/constants/SUPABASE';
import { supabaseClient } from '~/utils/supabaseClient';

import type { SigninScreenProps } from './ScreenProps';

export const Signin: VFC<SigninScreenProps> = () => {
  const onGoogleSignin = async () => {
    const redirectUri = makeRedirectUri({ path: '/', useProxy: false });
    const provider = 'google';
    startAsync({
      authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${redirectUri}`,
      returnUrl: redirectUri,
    }).then(async (response: any) => {
      if (!response) return;
      const { user, session, error } = await supabaseClient.auth.signIn({
        refreshToken: response.params?.refresh_token,
      });
      console.info(user, session, error);
    });
  };

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
