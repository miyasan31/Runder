import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { useTheme } from '~/hooks/useTheme';
import type { DevRunningStackParamList } from '~/types';

import { RunningScreen } from './running.screen';

const DevRunning = createNativeStackNavigator<DevRunningStackParamList>();

export const DevRunningNavigator: FC = () => {
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <DevRunning.Navigator
      initialRouteName="RunningScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <DevRunning.Screen
        name="RunningScreen"
        component={RunningScreen}
        options={() => ({
          title: 'ランニング中',
        })}
      />
    </DevRunning.Navigator>
  );
};
