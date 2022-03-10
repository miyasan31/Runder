import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { PrevButton } from '~/components/ui/Button';
import { useTheme } from '~/hooks/useTheme';
import type { TournamentStackParamList } from '~/types';

import { ChallengeDetailScreen } from './challenge_detail.screen';
import { ModalScreen } from './hoge.modal';
import { TournamentScreen } from './tournament.screen';
import { TournamentDetailScreen } from './tournament_detail.screen';

const Tournament = createNativeStackNavigator<TournamentStackParamList>();

export const TournamentNavigator: FC = () => {
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Tournament.Navigator
      initialRouteName="TournamentScreen"
      screenOptions={{ headerStyle: { backgroundColor } }}
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
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerBackTitleVisible: false,
          headerLeft: () => {
            const onPrevScreen = () => navigation.goBack();
            return <PrevButton onPress={onPrevScreen} />;
          },
        })}
      />

      <Tournament.Screen
        name="ChallengeDetailScreen"
        component={ChallengeDetailScreen}
        options={({ navigation }) => ({
          title: '大会の詳細・スタート',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerBackTitleVisible: false,
          headerLeft: () => {
            const onPrevScreen = () => navigation.goBack();
            return <PrevButton onPress={onPrevScreen} />;
          },
        })}
      />

      <Tournament.Group screenOptions={{ presentation: 'modal' }}>
        <Tournament.Screen name="Modal" component={ModalScreen} options={{ title: 'Oops!' }} />
      </Tournament.Group>
    </Tournament.Navigator>
  );
};
