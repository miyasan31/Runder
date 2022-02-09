import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import type { VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import { TabBarIcon } from "~/components/ui/TabBarIcon";
import { useColorScheme } from "~/hooks/useColorScheme";
import { useThemeColor } from "~/hooks/useThemeColor";
import { theme } from "~/styles";
import type { MainBottomTabParamList } from "~/types";

import { ContactNavigator } from "./contact";
import { ProfileNavigator } from "./profile";
import { RankingNavigator } from "./ranking";
import { ResultNavigator } from "./result";
import { TounamentNavigator } from "./tournament";

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTabNavigator: VFC = () => {
  const colorScheme = useColorScheme();
  const bg1 = useThemeColor({}, "bg1");

  return (
    <BottomTab.Navigator
      initialRouteName="Tounament"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme[colorScheme].primary,
        tabBarStyle: { position: "absolute", backgroundColor: bg1 },
        tabBarBackground: () => <BlurView intensity={10} style={StyleSheet.absoluteFill} />,
      }}
    >
      <BottomTab.Screen
        name="Contact"
        component={ContactNavigator}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ranking"
        component={RankingNavigator}
        options={() => ({
          title: "Ranking",
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Tounament"
        component={TounamentNavigator}
        options={() => ({
          title: "Tounament",
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Result"
        component={ResultNavigator}
        options={() => ({
          title: "Result",
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={() => ({
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
};
