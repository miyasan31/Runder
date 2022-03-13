import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { HeaderTitle } from '~/components/ui/HeaderTitle';
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
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
        },
      }}
    >
      <Ranking.Screen
        name="RankingScreen"
        component={RankingScreen}
        options={() => ({
          title: '',
          headerLeft: () => <HeaderTitle title="ランキング" />,
        })}
      />
    </Ranking.Navigator>
  );
};
