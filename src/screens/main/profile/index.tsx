import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import type { ProfileStackParamList } from '~/types';

import { ProfileScreen } from './profile.screen';

const Profile = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator: FC = () => {
  return (
    <Profile.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Profile.Screen name="ProfileScreen" component={ProfileScreen} options={() => ({})} />
    </Profile.Navigator>
  );
};
