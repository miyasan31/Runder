import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { VFC } from "react";
import React from "react";
import { useThemeColor } from "src/hooks";
import type { RankingStackParamList } from "src/types";

import { RankingScreen } from "./RankingScreen";

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
