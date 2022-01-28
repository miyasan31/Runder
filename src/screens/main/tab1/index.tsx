import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";
import { useThemeColor } from "src/hooks";
import type { TabOneStackParamList } from "src/types";

import { TabOneScreen } from "./TabOneScreen";

const TabOne = createNativeStackNavigator<TabOneStackParamList>();

export const TabOneNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <TabOne.Navigator
      initialRouteName="TabOneScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <TabOne.Screen name="TabOneScreen" component={TabOneScreen} options={() => ({})} />
    </TabOne.Navigator>
  );
};
