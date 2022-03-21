import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { IconButton } from '~/components/ui/Button';
import { useTheme } from '~/hooks/useTheme';
import type { TournamentStackParamList } from '~/types';

import { ChallengeDetailScreen } from './challenge_detail.screen';
import { TournamentScreen } from './tournament.screen';
import { TournamentDetailScreen } from './tournament_detail.screen';

const Tournament = createNativeStackNavigator<TournamentStackParamList>();

export const TournamentNavigator: FC = () => {
  const color = useTheme({}, 'color1');
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Tournament.Navigator
      initialRouteName="TournamentScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color,
          fontSize: 18,
          fontWeight: '600',
        },
      }}
    >
      <Tournament.Screen
        name="TournamentScreen"
        component={TournamentScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <Tournament.Screen
        name="TournamentDetailScreen"
        component={TournamentDetailScreen}
        options={({ navigation }) => ({
          title: '大会の詳細・スタート',
          headerLeft: () => {
            const onPrevScreen = () => navigation.goBack();
            return <IconButton onPress={onPrevScreen} />;
          },
        })}
      />

      <Tournament.Screen
        name="ChallengeDetailScreen"
        component={ChallengeDetailScreen}
        options={({ navigation }) => ({
          title: '大会の詳細・スタート',
          headerLeft: () => {
            const onPrevScreen = () => navigation.goBack();
            return <IconButton onPress={onPrevScreen} />;
          },
        })}
      />
    </Tournament.Navigator>
  );
};
