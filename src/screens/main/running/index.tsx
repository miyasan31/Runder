import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";
import { useThemeColor } from "src/hooks";
import type { RunningStackParamList } from "src/types";

import { RunningDetailScreen } from "./RunningDetailScreen";
import { RunningHistoryScreen } from "./RunningHistoryScreen";

const Running = createNativeStackNavigator<RunningStackParamList>();

export const RunningNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <Running.Navigator
      initialRouteName="RunningHistory"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Running.Screen
        name="RunningHistory"
        component={RunningHistoryScreen}
        options={() => ({
          title: "ランニング履歴",
        })}
      />

      <Running.Screen
        name="RunningDetail"
        component={RunningDetailScreen}
        options={() => ({
          title: "ランニング詳細",
        })}
      />
    </Running.Navigator>
  );
};
