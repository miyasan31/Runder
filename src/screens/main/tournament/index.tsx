import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React from 'react';

import { PrevButton } from '~/components/ui/Button';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { TournamentScreenProps, TournamentStackParamList } from '~/types';

import { ModalScreen } from './hoge.modal';
import { TournamentDetailScreen } from './tounament_detail.screen';
import { TournamentScreen } from './tournament.screen';

type Option<T extends keyof TournamentStackParamList> = TournamentScreenProps<T>;

const Tournament = createNativeStackNavigator<TournamentStackParamList>();

export const TournamentNavigator: VFC = () => {
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
        options={(options: Option<'TournamentDetailScreen'>) => ({
          title: '大会の詳細・スタート',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerBackTitleVisible: false,
          headerLeft: () => <PrevButton {...options} screen="TournamentScreen" />,
        })}
      />

      <Tournament.Group screenOptions={{ presentation: 'modal' }}>
        <Tournament.Screen name="Modal" component={ModalScreen} options={{ title: 'Oops!' }} />
      </Tournament.Group>
    </Tournament.Navigator>
  );
};
