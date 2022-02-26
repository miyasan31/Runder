import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { FC } from 'react';
import React from 'react';

import { TabBarIcon } from '~/components/ui/TabBarIcon';
import type { DevelopmentTabParamList } from '~/types';

import { DevListNavigator } from './list';
import { DevRunningNavigator } from './running';

const DevelopmentTab = createBottomTabNavigator<DevelopmentTabParamList>();

export const DevelopmentTabNavigator: FC = () => {
  return (
    <DevelopmentTab.Navigator
      initialRouteName="DevRunning"
      screenOptions={{
        headerShown: false,
      }}
    >
      <DevelopmentTab.Screen
        name="DevRunning"
        component={DevRunningNavigator}
        options={{
          tabBarLabel: 'DevRunning',
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
      <DevelopmentTab.Screen
        name="DevList"
        component={DevListNavigator}
        options={{
          tabBarLabel: 'DevList',
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </DevelopmentTab.Navigator>
  );
};
