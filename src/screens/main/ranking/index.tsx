import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { RankingStackParamList } from "~/types";

import { RankingScreen } from "./ranking.screen";

const Ranking = createNativeStackNavigator<RankingStackParamList>();

export const RankingNavigator: VFC = () => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <Ranking.Navigator
      initialRouteName="RankingScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Ranking.Screen name="RankingScreen" component={RankingScreen} options={() => ({})} />
    </Ranking.Navigator>
  );
};
