// import { createDrawerNavigator } from "@react-navigation/drawer";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React, { useMemo } from "react";
import type { ColorSchemeName } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { RootStackParamList } from "~/types";
import { linkingConfiguration } from "~/utils/linkingConfiguration";

import { NotFoundScreen } from "./404.screen";
import { AuthNavigator } from "./auth";
import { DevelopmentTabNavigator } from "./development";
import { ModalScreen } from "./hoge.modal";
import { BottomTabNavigator } from "./main";

// import { RootNavigator } from "./app";
const RootStack = createNativeStackNavigator<RootStackParamList>();
// const RootStack = createDrawerNavigator<RootStackParamList>();

export const Navigations: VFC<{ colorScheme: ColorSchemeName }> = (props) => {
  const backgroundColor = useThemeColor({}, "bg1");

  const themeResult = useMemo(() => {
    return props?.colorScheme === "dark" ? DarkTheme : DefaultTheme;
  }, [props]);

  return (
    <NavigationContainer linking={linkingConfiguration} theme={themeResult}>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: backgroundColor },
          }}
        />
        <RootStack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: backgroundColor },
          }}
        />
        <RootStack.Screen
          name="Development"
          component={DevelopmentTabNavigator}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: backgroundColor },
          }}
        />

        <RootStack.Screen
          name="NotFoundScreen"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />

        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen name="Modal" component={ModalScreen} options={{ title: "Oops!" }} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
