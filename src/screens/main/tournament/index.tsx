import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";
import { useThemeColor } from "src/hooks";
import type { TounamentStackParamList } from "src/types";

import { TounamentScreen } from "./TounamentScreen";

const Tounament = createNativeStackNavigator<TounamentStackParamList>();

export const TounamentNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <Tounament.Navigator
      initialRouteName="TounamentScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Tounament.Screen name="TounamentScreen" component={TounamentScreen} options={() => ({})} />
    </Tounament.Navigator>
  );
};
