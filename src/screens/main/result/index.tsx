import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import type { ResultStackParamList } from '~/types';

import { ResultScreen } from './result.screen';

const Result = createNativeStackNavigator<ResultStackParamList>();

export const ResultNavigator: FC = () => {
  return (
    <Result.Navigator
      initialRouteName="ResultScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Result.Screen name="ResultScreen" component={ResultScreen} options={() => ({})} />
    </Result.Navigator>
  );
};
