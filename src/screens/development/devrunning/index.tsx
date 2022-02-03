import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";

import { useThemeColor } from "~/hooks";
import type { DevRunningStackParamList } from "~/types";

import { RunningScreen } from "./RunningScreen";

const DevRunning = createNativeStackNavigator<DevRunningStackParamList>();

export const DevRunningNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <DevRunning.Navigator
      initialRouteName="RunningScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <DevRunning.Screen
        name="RunningScreen"
        component={RunningScreen}
        options={() => ({
          title: "ランニング中",
        })}
      />
    </DevRunning.Navigator>
  );
};
