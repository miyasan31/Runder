import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";

import { useThemeColor } from "~/hooks";
import type { ResultStackParamList } from "~/types";

import { ResultScreen } from "./ResultScreen";

const Result = createNativeStackNavigator<ResultStackParamList>();

export const ResultNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <Result.Navigator
      initialRouteName="ResultScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Result.Screen name="ResultScreen" component={ResultScreen} options={() => ({})} />
    </Result.Navigator>
  );
};
