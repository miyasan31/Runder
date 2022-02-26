import type { FC } from 'react';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Divider } from '~/components/ui/Divider';
import { SignEmailForm } from '~/components/ui/Form';
import { Apple, Google } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
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
    <View style={style.container}>
      <Text style={style.title}>メールアドレスでサインアップ</Text>

      <SignEmailForm onSignEmail={onSignUpEmail} />

      <Divider style={style.divider} />

      <Button
        leftIcon={<Google />}
        label="Googleでサインアップ"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        bg="bg1"
        onPress={onSignInGoogle}
      />

      <Button
        leftIcon={<Apple />}
        label="Appleでサインアップ"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        lightBg="#333333"
        lightText="#FFF"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: '6%',
  },
  title: {
    marginBottom: '6%',

    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    marginTop: '5%',
  },
  buttonOutline: {
    marginTop: '5%',
  },
  buttonBg: {
    height: 60,
  },
  buttonText: {
    width: 'auto',
    marginLeft: '4%',
  },
});
