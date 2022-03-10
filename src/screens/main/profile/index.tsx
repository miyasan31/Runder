import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { useTheme } from '~/hooks/useTheme';
import type { ProfileStackParamList } from '~/types';

import { ProfileScreen } from './profile.screen';

const Profile = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator: FC = () => {
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Profile.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
        },
      }}
    >
      <Profile.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Profile.Navigator>
  );
};
