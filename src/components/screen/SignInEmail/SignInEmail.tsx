import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Button as NativeButton, StyleSheet } from 'react-native';

import { SignEmailForm } from '~/components/ui/Form';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { AUTH_PROVIDER_KEY } from '~/constants/ENV';
import { sleep } from '~/functions/sleep';
import { updateSession } from '~/stores/session';
import { layoutStyle } from '~/styles';
import { saveSecureStore } from '~/utils/secureStore';
import { supabaseClient } from '~/utils/supabase';
import { toastKit } from '~/utils/toastKit';

import type { SignInEmailScreenProps } from './ScreenProps';

export const SignInEmail: FC<SignInEmailScreenProps> = ({ navigation }) => {
  const onSignInEmail = useCallback(async (email, password) => {
    const { errorToast, successToast } = toastKit('サインインしています...');

    const signInPromise = supabaseClient.auth.signIn({ email, password });
    const secureStorePromise = saveSecureStore(AUTH_PROVIDER_KEY, 'email');
    const sleepPromise = sleep(1000);
    const [{ error }] = await Promise.all([signInPromise, secureStorePromise, sleepPromise]);

    if (error) {
      errorToast('サインインに失敗しました');
      return;
    }

    successToast('サインインに成功しました');
    updateSession(true);
  }, []);

  const onSignUpNavigate = useCallback(() => {
    navigation.navigate('SignUpScreen');
  }, [navigation]);

  return (
    <View style={layoutStyle.auth}>
      <Text style={style.screen_title}>メールアドレスでサインイン</Text>

      <SignEmailForm onSignEmail={onSignInEmail} />

      <View style={style.register_box}>
        <Text style={style.register_text}>新規登録の場合は</Text>
        <NativeButton title="こちら" onPress={onSignUpNavigate} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screen_title: {
    marginBottom: '6%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  register_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
  },
  register_text: {
    width: 'auto',
    fontSize: 18,
    textAlign: 'center',
    marginRight: '-1%',
  },
});
