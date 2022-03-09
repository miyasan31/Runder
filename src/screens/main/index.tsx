import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { FeatherIcon } from '~/components/ui/Icon';
import { useTheme } from '~/hooks/useTheme';
import type { MainBottomTabParamList } from '~/types';

import { ContactNavigator } from './contact';
import { ProfileNavigator } from './profile';
import { RankingNavigator } from './ranking';
import { ResultNavigator } from './result';
import { TournamentNavigator } from './tournament';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTabNavigator: FC = () => {
  const icon = useTheme({}, 'color2');
  const primary = useTheme({}, 'primary');
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <BottomTab.Navigator
      initialRouteName="Tournament"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: icon,
        tabBarActiveTintColor: primary,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
        tabBarStyle: { position: 'absolute', backgroundColor },
        tabBarBackground: () => <BlurView intensity={10} style={StyleSheet.absoluteFill} />,
      }}
    >
      <BottomTab.Screen
        name="Contact"
        component={ContactNavigator}
        options={{
          tabBarLabel: 'お知らせ',
          tabBarIcon: ({ color }) => <FeatherIcon name="mail" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ranking"
        component={RankingNavigator}
        options={() => ({
          title: 'ランキング',
          tabBarIcon: ({ color }) => <FeatherIcon name="award" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Tournament"
        component={TournamentNavigator}
        options={() => ({
          title: '大会',
          tabBarIcon: ({ color }) => <FeatherIcon name="star" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Result"
        component={ResultNavigator}
        options={() => ({
          title: '履歴',
          tabBarIcon: ({ color }) => <FeatherIcon name="search" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={() => ({
          title: 'プロフィール',
          tabBarIcon: ({ color }) => <FeatherIcon name="user" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
};
