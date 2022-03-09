import type { FC } from 'react';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Divider } from '~/components/ui/Divider';
import { SignEmailForm } from '~/components/ui/Form';
import { Apple, Google } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { AUTH_PROVIDER_KEY } from '~/constants/SECURE_STORE';
import { sleep } from '~/functions/sleep';
import { saveSecureStore } from '~/utils/secureStore';
import { onSignInGoogle, supabaseClient } from '~/utils/supabase';
import { toastKit } from '~/utils/toastKit';

import type { SignUpScreenProps } from './ScreenProps';

const AlreadyRegisteredMessage = 'User already registered';

export const SignUp: FC<SignUpScreenProps> = ({ navigation }) => {
  const onSignUpEmail = useCallback(
    async (email, password) => {
      const { errorToast, successToast } = toastKit('サインアップしています...');

      const signUpPromise = supabaseClient.auth.signUp({ email, password });
      const secureStorePromise = saveSecureStore(AUTH_PROVIDER_KEY, 'email');
      const sleepPromise = sleep(1000);
      const [{ error }] = await Promise.all([signUpPromise, secureStorePromise, sleepPromise]);

      if (error) {
        if (error.message === AlreadyRegisteredMessage) {
          errorToast('すでにアカウント登録されています');
          navigation.navigate('SignInScreen');
          return;
        }
        errorToast('サインアップに失敗しました');
        return;
      }

      successToast('サインアップに成功しました');
      navigation.navigate('UserRegisterScreen');
    },
    [navigation],
  );

  return (
    <>
      <Text style={style.screen_title}>メールアドレスでサインアップ</Text>

      <SignEmailForm onSignEmail={onSignUpEmail} />

      <Divider outlineStyle={style.divider_outline} />

      <Button
        leftIcon={<Google />}
        label="Googleでサインアップ"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        bg="bg1"
        onPress={onSignInGoogle}
      />

      <Button
        leftIcon={<Apple />}
        label="Appleでサインアップ"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        lightBg="#333333"
        lightColor="#FFF"
      />
    </>
  );
};

const style = StyleSheet.create({
  screen_title: {
    marginBottom: '6%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  divider_outline: {
    marginTop: '5%',
  },
  button_outline: {
    marginTop: '5%',
  },
  button_bg: {
    height: 60,
  },
  button_text: {
    width: 'auto',
    marginLeft: '4%',
  },
});
