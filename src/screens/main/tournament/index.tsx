import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { GoBackButton } from '~/components/ui/Button';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { TournamentStackParamList } from '~/types';

import { ModalScreen } from './hoge.modal';
import { TournamentDetailScreen } from './tounament_detail.screen';
import { TournamentScreen } from './tournament.screen';

const Tournament = createNativeStackNavigator<TournamentStackParamList>();

export const TournamentNavigator: FC = () => {
  const backgroundColor = useThemeColor({}, 'bg1');

  return (
    <Tournament.Navigator
      initialRouteName="TournamentScreen"
      screenOptions={{
        headerStyle: { backgroundColor },
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
        options={() => ({
          title: '大会の詳細・スタート',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerBackTitleVisible: false,
          headerLeft: () => <GoBackButton />,
        })}
      />

      <Tournament.Group screenOptions={{ presentation: 'modal' }}>
        <Tournament.Screen name="Modal" component={ModalScreen} options={{ title: 'Oops!' }} />
      </Tournament.Group>
    </Tournament.Navigator>
  );
};
