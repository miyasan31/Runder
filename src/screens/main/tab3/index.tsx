import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";
import { useThemeColor } from "src/hooks";
import type { TabThreeStackParamList } from "types";

import { TabThreeScreen } from "./TabThreeScreen";

const TabThree = createNativeStackNavigator<TabThreeStackParamList>();

export const TabThreeNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <TabThree.Navigator
      initialRouteName="TabThreeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
        headerLargeTitle: true,
        headerLargeTitleStyle: {
          fontWeight: "400",
          fontSize: 30,
        },
      }}
    >
      <TabThree.Screen name="TabThreeScreen" component={TabThreeScreen} options={() => ({})} />
    </TabThree.Navigator>
  );
};
