import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React from 'react';

import type { TounamentStackParamList } from '~/types';

import { ModalScreen } from './hoge.modal';
import { TounamentScreen } from './tounament.screen';

const Tounament = createNativeStackNavigator<TounamentStackParamList>();

export const TounamentNavigator: VFC = () => {
  return (
    <Tounament.Navigator
      initialRouteName="TounamentScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tounament.Screen name="TounamentScreen" component={TounamentScreen} options={() => ({})} />

      <Tounament.Group screenOptions={{ presentation: 'modal' }}>
        <Tounament.Screen name="Modal" component={ModalScreen} options={{ title: 'Oops!' }} />
      </Tounament.Group>
    </Tounament.Navigator>
  );
};
