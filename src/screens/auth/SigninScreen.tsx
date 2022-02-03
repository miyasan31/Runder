import { makeRedirectUri, startAsync } from "expo-auth-session";
import type { VFC } from "react";
import React from "react";
import { Text, View } from "react-native";

import { ColorButton } from "~/components/custom";
import { SUPABASE_URL } from "~/constants";
import type { AuthScreenProps } from "~/types";
import { supabaseClient } from "~/utils/supabaseClient";

export const SigninScreen: VFC<AuthScreenProps<"SigninScreen">> = () => {
  const onGoogleSignin = async () => {
    const redirectUri = makeRedirectUri({ path: "/", useProxy: false });
    const provider = "google";

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
    <View>
      <Text></Text>
      <ColorButton title="Googleでログイン" onPress={onGoogleSignin} />
    </View>
  );
};
