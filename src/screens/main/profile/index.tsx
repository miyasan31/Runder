import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { IconButton } from '~/components/ui/Button';
import { useTheme } from '~/hooks/useTheme';
import type { ProfileStackParamList } from '~/types';

import { AvatarEditScreen } from './avatar_edit.screen';
import { ProfileScreen } from './profile.screen';
import { ProfileEditScreen } from './profile_edit.screen';
import { AccountDeletionScreen } from './setting/account_deletion.screen';
import { ContactScreen } from './setting/contact.screen';
import { PrivacyScreen } from './setting/privacy.screen';
import { SettingScreen } from './setting/setting.screen';
import { TermsScreen } from './setting/terms.screen';
import { ThemeScreen } from './setting/theme.screen';

const Profile = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator: FC = () => {
  const color = useTheme({}, 'color1');
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Profile.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color,
          fontSize: 18,
          fontWeight: '600',
        },
      }}
    >
      <Profile.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: '',
          headerRight: () => {
            const onNavigationSetting = () => navigation.navigate('SettingScreen');
            return <IconButton type="setting" onPress={onNavigationSetting} />;
          },
        })}
      />

      <Profile.Group>
        <Profile.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={({ navigation }) => ({
            title: '設定',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <IconButton onPress={onPrevScreen} />;
            },
          })}
        />
        <Profile.Screen
          name="ThemeScreen"
          component={ThemeScreen}
          options={({ navigation }) => ({
            title: 'テーマ',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <IconButton onPress={onPrevScreen} />;
            },
          })}
        />
        <Profile.Screen
          name="PrivacyScreen"
          component={PrivacyScreen}
          options={({ navigation }) => ({
            title: 'プライバシーポリシー',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <IconButton onPress={onPrevScreen} />;
            },
          })}
        />
        <Profile.Screen
          name="TermsScreen"
          component={TermsScreen}
          options={({ navigation }) => ({
            title: '利用規約',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <IconButton onPress={onPrevScreen} />;
            },
          })}
        />
        <Profile.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={({ navigation }) => ({
            title: 'お問い合わせ',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <IconButton onPress={onPrevScreen} />;
            },
          })}
        />
        <Profile.Screen
          name="AccountDeletionScreen"
          component={AccountDeletionScreen}
          options={({ navigation }) => ({
            title: 'アカウント削除',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <IconButton onPress={onPrevScreen} />;
            },
          })}
        />
      </Profile.Group>

      <Profile.Group screenOptions={{ presentation: 'fullScreenModal' }}>
        <Profile.Screen
          name="ProfileEditScreen"
          component={ProfileEditScreen}
          options={({ navigation }) => ({
            title: 'プロフィール編集',
            headerLeft: () => {
              const onPrevScreen = () => navigation.goBack();
              return <IconButton type="close" onPress={onPrevScreen} />;
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
              return <IconButton type="close" onPress={onPrevScreen} />;
            },
          })}
        />
      </Profile.Group>
    </Profile.Navigator>
  );
};
