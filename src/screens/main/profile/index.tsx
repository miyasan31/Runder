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
        headerShown: false,
        headerStyle: { backgroundColor },
      }}
    >
      <Profile.Screen name="ProfileScreen" component={ProfileScreen} options={() => ({})} />
    </Profile.Navigator>
  );
};
