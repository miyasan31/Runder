import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { PrevButton } from '~/components/ui/Button';
import { useTheme } from '~/hooks/useTheme';
import type { ProfileStackParamList } from '~/types';

import { AvatarEditScreen } from './avatar_edit.screen';
import { ProfileScreen } from './profile.screen';
import { ProfileEditScreen } from './profile_edit.screen';

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

      <Profile.Group screenOptions={{ presentation: 'fullScreenModal' }}>
        <Profile.Screen
          name="ProfileEditScreen"
          component={ProfileEditScreen}
          options={({ navigation }) => ({
            title: 'プロフィール編集',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <PrevButton type="close" onPress={onPrevScreen} />;
            },
          })}
        />
        <Profile.Screen
          name="AvatarEditScreen"
          component={AvatarEditScreen}
          options={({ navigation }) => ({
            title: 'アバター編集',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <PrevButton type="close" onPress={onPrevScreen} />;
            },
          })}
        />
      </Profile.Group>
    </Profile.Navigator>
  );
};
