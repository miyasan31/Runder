import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import type { VFC } from "react";
import React, { useEffect, useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "~/constants";
import type { AuthScreenProps } from "~/types";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export const SigninScreen: VFC<AuthScreenProps<"SigninScreen">> = () => {
  const [name, setName] = useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: AUTH0_CLIENT_ID,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint: AUTH0_DOMAIN },
  );

  // auth.expo.io/@your-username/your-expo-app-slug
  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  console.info(`Redirect URL: ${redirectUri}`);

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong",
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      {name ? (
        <>
          <Text style={styles.title}>You are logged in, {name}!</Text>
          <Button title="Log out" onPress={() => setName(null)} />
        </>
      ) : (
        <Button
          disabled={!request}
          title="Log in with Auth0"
          onPress={() => promptAsync({ useProxy })}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
