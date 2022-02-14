import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React from 'react';

import type { TournamentStackParamList } from '~/types';

import { ModalScreen } from './hoge.modal';
import { TournamentScreen } from './tournament.screen';

const Tournament = createNativeStackNavigator<TournamentStackParamList>();

export const TournamentNavigator: VFC = () => {
  return (
    <Tournament.Navigator
      initialRouteName="TournamentScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tournament.Screen
        name="TournamentScreen"
        component={TournamentScreen}
        options={() => ({})}
      />

      <Tournament.Group screenOptions={{ presentation: 'modal' }}>
        <Tournament.Screen name="Modal" component={ModalScreen} options={{ title: 'Oops!' }} />
      </Tournament.Group>
    </Tournament.Navigator>
  );
};
