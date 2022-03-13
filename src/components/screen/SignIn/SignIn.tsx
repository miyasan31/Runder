import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Button as NativeButton, Dimensions, Image, StyleSheet } from 'react-native';

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
    <>
      <Image source={require('assets/images/runder-logo.png')} style={style.brand_logo} />

      <View style={[style.float_box, layoutStyle.auth]}>
        <View style={style.app_title_box}>
          <Runder />
        </View>

        <Text style={style.app_message}>あなたのライバルたちが待っています</Text>
        <Text style={style.app_message}>さっそく走り出しましょう</Text>

        <View style={style.button_group}>
          <Button
            leftIcon={<Google />}
            label="Googleでサインイン"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            bg="bg1"
            lightBg="#FFF"
            lightColor="#333"
            darkBg="#FFF"
            darkColor="#333"
            onPress={onSignInGoogle}
          />
          <Button
            leftIcon={<Apple />}
            label="Appleでサインイン"
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            lightBg="#333"
            lightColor="#FFF"
            darkBg="#333"
            darkColor="#FFF"
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
            darkBg="#808080"
            darkColor="#FFF"
            onPress={onSignInEmailNavigate}
          />
        </View>

        <View style={style.register_box}>
          <Text style={style.register_text}>サインアップは</Text>
          <NativeButton title="こちら" onPress={onSignUpNavigate} />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  brand_logo: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  float_box: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  app_title_box: {
    marginTop: '30%',
    alignItems: 'center',
    marginBottom: '6%',
  },
  app_message: {
    marginVertical: '2%',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  button_group: {
    marginTop: '20%',
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
    marginRight: '-1%',
  },
});
