import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { useTheme } from '~/hooks/useTheme';
import type { RankingStackParamList } from '~/types';

import { RankingScreen } from './ranking.screen';

const Ranking = createNativeStackNavigator<RankingStackParamList>();

export const RankingNavigator: FC = () => {
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Ranking.Navigator
      initialRouteName="RankingScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor },
      }}
    >
      <Ranking.Screen name="RankingScreen" component={RankingScreen} options={() => ({})} />
    </Ranking.Navigator>
  );
};
