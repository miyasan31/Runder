import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Button as NativeButton, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Apple, Google, Mail, Runder } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { onSignInGoogle, onSignOut } from '~/utils/supabase';

import type { SignInScreenProps } from './ScreenProps';

export const SignIn: FC<SignInScreenProps> = ({ navigation }) => {
  const onSignInEmailNavigate = useCallback(() => {
    navigation.navigate('SignInEmailScreen');
  }, [navigation]);

  const onSignUpNavigate = useCallback(() => {
    navigation.navigate('SignUpScreen');
  }, [navigation]);

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
        label="Googleでサインイン"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        bg="bg1"
        onPress={onSignInGoogle}
      />
      <Button
        leftIcon={<Apple />}
        label="Appleでサインイン"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        lightBg="#333333"
        lightColor="#FFF"
        onPress={onSignOut}
      />
      <Button
        leftIcon={<Mail />}
        label="メールでサインイン"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        lightBg="#808080"
        lightColor="#FFF"
        onPress={onSignInEmailNavigate}
      />

      <View style={style.registerArea}>
        <Text style={style.registerText}>新規登録の場合は</Text>
        <NativeButton title="こちら" onPress={onSignUpNavigate} />
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
