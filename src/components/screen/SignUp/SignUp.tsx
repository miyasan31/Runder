import type { VFC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Divider } from '~/components/ui/Divider';
import { Apple, Google } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { View } from '~/components/ui/View';
import { onSignInGoogle } from '~/utils/supabase';

import type { SignUpScreenProps } from './ScreenProps';

export const SignUp: VFC<SignUpScreenProps> = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>メールアドレスでサインアップ</Text>
      <Text style={style.label}>メールアドレス</Text>
      <TextInput />

      <Text style={style.label}>パスワード</Text>
      <TextInput secureTextEntry />

      <Button
        label="サインアップ"
        textTheme="text0"
        bgTheme="primary"
        outlineStyle={style.buttonOutline}
      />

      <Divider style={style.divider} />

      <Button
        leftIcon={<Google />}
        label="Googleでサインアップ"
        outlineStyle={style.buttonOutline}
        bgStyle={style.buttonBg}
        textStyle={style.buttonText}
        bgTheme="bg1"
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
  label: {
    lineHeight: 30,
    paddingLeft: '1%',
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
