import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import type { VFC } from "react";
import React, { useMemo } from "react";
import type { ColorSchemeName } from "react-native";

import { AuthProvider } from "~/navigations/AuthProvider";
import { LinkingConfiguration } from "~/navigations/LinkingConfiguration";
import { RootNavigator } from "~/navigations/RootNavigator";

export const Navigations: VFC<{ colorScheme: ColorSchemeName }> = (props) => {
  const themeResult = useMemo(() => {
    return props?.colorScheme === "dark" ? DarkTheme : DefaultTheme;
  }, [props]);

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={themeResult}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
