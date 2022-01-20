import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import type { VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import { TabBarIcon } from "src/components/icon";
import { useColorScheme } from "src/hooks";
import { useThemeColor } from "src/hooks/useThemeColor";
import { theme } from "src/styles";
import type { BottomTabParamList } from "types";

import { TabOneNavigator } from "./tab1";
import { TabTwoNavigator } from "./tab2";
import { TabThreeNavigator } from "./tab3";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: VFC = () => {
  const colorScheme = useColorScheme();
  const bg1 = useThemeColor({}, "bg1");

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme[colorScheme].primary,
        tabBarStyle: { position: "absolute", backgroundColor: bg1 },
        tabBarBackground: () => <BlurView intensity={10} style={StyleSheet.absoluteFill} />,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarLabel: "TabOne",
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={() => ({
          title: "TabTwo",
          tabBarIcon: ({ color }) => <TabBarIcon name="list-outline" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={() => ({
          title: "TabThree",
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
};
