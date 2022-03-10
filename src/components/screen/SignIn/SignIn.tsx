import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Button as NativeButton, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Apple, Google, Mail, Runder } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { layoutStyle } from '~/styles';
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
    <View style={layoutStyle.auth}>
      <View style={style.icon_box}>
        <Runder />
      </View>

      <View style={style.app_message_box}>
        <Text style={style.app_message}>あなたのライバルたちが待っています</Text>
        <Text style={style.app_message}>さっそく走り出しましょう</Text>
      </View>

      <Button
        leftIcon={<Google />}
        label="Googleでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        bg="bg1"
        onPress={onSignInGoogle}
      />
      <Button
        leftIcon={<Apple />}
        label="Appleでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        lightBg="#333333"
        lightColor="#FFF"
        onPress={onSignOut}
      />
      <Button
        leftIcon={<Mail />}
        label="メールでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        lightBg="#808080"
        lightColor="#FFF"
        onPress={onSignInEmailNavigate}
      />

      <View style={style.register_box}>
        <Text style={style.register_text}>新規登録の場合は</Text>
        <NativeButton title="こちら" onPress={onSignUpNavigate} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  icon_box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '6%',
  },
  app_message_box: {
    marginBottom: '40%',
  },
  app_message: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
  },
  button_outline: {
    marginBottom: '3%',
  },
  button_bg: {
    height: 60,
  },
  button_text: {
    width: 'auto',
    marginLeft: '4%',
  },
  register_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register_text: {
    width: 'auto',
    fontSize: 18,
    textAlign: 'center',
    marginRight: '-1%',
  },
});
