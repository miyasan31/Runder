import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import type { VFC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { TabBarIcon } from '~/components/ui/TabBarIcon';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { MainBottomTabParamList } from '~/types';

import { ContactNavigator } from './contact';
import { ProfileNavigator } from './profile';
import { RankingNavigator } from './ranking';
import { ResultNavigator } from './result';
import { TournamentNavigator } from './tournament';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTabNavigator: VFC = () => {
  const icon = useThemeColor({}, 'icon');
  const primary = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({}, 'bg3');

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
          tabBarLabel: 'メール',
          tabBarIcon: ({ color }) => <TabBarIcon name="mail" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ranking"
        component={RankingNavigator}
        options={() => ({
          title: 'ランキング',
          tabBarIcon: ({ color }) => <TabBarIcon name="award" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Tournament"
        component={TournamentNavigator}
        options={() => ({
          title: '大会',
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Result"
        component={ResultNavigator}
        options={() => ({
          title: '履歴',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={() => ({
          title: 'プロフィール',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
};
