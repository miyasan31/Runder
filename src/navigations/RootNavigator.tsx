// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { useThemeColor } from "src/hooks";
import { AuthNavigator } from "src/screens/auth";
import { DevelopmentTabNavigator } from "src/screens/development";
import { BottomTabNavigator } from "src/screens/main";
import type { RootStackParamList } from "src/types";

// const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootStack = createDrawerNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const backgroundColor = useThemeColor({}, "bg1");
  return (
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
    </RootStack.Navigator>
  );
};
