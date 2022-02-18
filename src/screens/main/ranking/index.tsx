import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React from 'react';

import type { RankingStackParamList } from '~/types';

import { RankingScreen } from './ranking.screen';

const Ranking = createNativeStackNavigator<RankingStackParamList>();

export const RankingNavigator: VFC = () => {
  return (
    <Ranking.Navigator
      initialRouteName="RankingScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Ranking.Screen name="RankingScreen" component={RankingScreen} options={() => ({})} />
    </Ranking.Navigator>
  );
};
