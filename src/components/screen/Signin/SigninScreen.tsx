import { makeRedirectUri, startAsync } from 'expo-auth-session';
import type { VFC } from 'react';
import React from 'react';
import { Platform, Text, View } from 'react-native';

import { Button } from '~/components/ui/Button';
import { SUPABASE_URL } from '~/constants/SUPABASE';
import type { AuthScreenProps } from '~/types';
import { supabaseClient } from '~/utils/supabaseClient';

const useProxy = Platform.select({ default: false });
const redirectUri = makeRedirectUri({ useProxy });
const provider = 'google';

export const SigninScreen: VFC<AuthScreenProps<'SigninScreen'>> = () => {
  const onGoogleSignin = async () => {
    startAsync({
      authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&redirect_to=${redirectUri}`,
      returnUrl: redirectUri,
    }).then(async (response: any) => {
      if (!response) return;
      console.info(response);
      const { user, session, error } = await supabaseClient.auth.signIn({
        refreshToken: response.params?.refresh_token,
      });
      console.info(user, session, error);
    });
  };

  return (
    <View>
      <Text />
      <Button label="Googleでログイン" onPress={onGoogleSignin} />
    </View>
  );
};
