import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";
import { useThemeColor } from "src/hooks";
import type { DevListStackParamList } from "src/types";

import { RunningDetailScreen } from "./RunningDetailScreen";
import { RunningHistoryScreen } from "./RunningHistoryScreen";

const DevList = createNativeStackNavigator<DevListStackParamList>();

export const DevListNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <DevList.Navigator
      initialRouteName="RunningHistory"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <DevList.Screen
        name="RunningHistory"
        component={RunningHistoryScreen}
        options={() => ({
          title: "ランニング履歴",
        })}
      />

      <DevList.Screen
        name="RunningDetail"
        component={RunningDetailScreen}
        options={() => ({
          title: "ランニング詳細",
        })}
      />
    </DevList.Navigator>
  );
};
