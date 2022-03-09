import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { useTheme } from '~/hooks/useTheme';
import type { DevListStackParamList } from '~/types';

import { RunningDetailScreen } from './running_detail.screen';
import { RunningHistoryScreen } from './running_history.screen';

const DevList = createNativeStackNavigator<DevListStackParamList>();

export const DevListNavigator: FC = () => {
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <DevList.Navigator
      initialRouteName="RunningHistoryScreen"
      screenOptions={{
        headerStyle: { backgroundColor: backgroundColor },
      }}
    >
      <DevList.Screen
        name="RunningHistoryScreen"
        component={RunningHistoryScreen}
        options={() => ({
          title: 'ランニング履歴',
        })}
      />

      <DevList.Screen
        name="RunningDetailScreen"
        component={RunningDetailScreen}
        options={() => ({
          title: 'ランニング詳細',
        })}
      />
    </DevList.Navigator>
  );
};
