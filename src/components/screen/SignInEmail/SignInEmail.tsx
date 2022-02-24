import type { VFC } from 'react';
import React, { useCallback } from 'react';
import { Button as NativeButton, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { View } from '~/components/ui/View';

import type { SignInEmailScreenProps } from './ScreenProps';

export const SignInEmail: VFC<SignInEmailScreenProps> = ({ navigation }) => {
  const onSignUpNavigate = useCallback(() => {
    navigation.navigate('SignUpScreen');
  }, [navigation]);

  return (
    <View style={style.container}>
      <Text style={style.title}>メールアドレスでサインイン</Text>
      <Text style={style.label}>メールアドレス</Text>
      <TextInput />

      <Text style={style.label}>パスワード</Text>
      <TextInput secureTextEntry />

      <Button
        label="サインイン"
        textTheme="text0"
        bgTheme="primary"
        outlineStyle={style.buttonOutline}
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
  title: {
    marginBottom: '6%',

    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  label: {
    lineHeight: 30,
    paddingLeft: '1%',
  },
  buttonOutline: {
    marginTop: '5%',
    marginBottom: '3%',
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
