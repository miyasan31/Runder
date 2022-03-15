import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { BlurView } from 'expo-blur';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { FeatherIcon, RunderLogo } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { Bounceable } from '~/components/ui/View';
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
  const backgroundColor = useTheme({}, 'bg4');

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
        // tabBarBackground: () => <BlurView intensity={10} style={StyleSheet.absoluteFill} />,
      }}
    >
      <BottomTab.Screen
        name="Contact"
        component={ContactNavigator}
        options={{
          tabBarLabel: 'お知らせ',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <BottomTabIcon label="お知らせ" name="mail" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ranking"
        component={RankingNavigator}
        options={() => ({
          title: 'ランキング',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <BottomTabIcon label="ランキング" name="award" color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Tournament"
        component={TournamentNavigator}
        options={() => ({
          title: '',
          tabBarShowLabel: false,
          tabBarIcon: () => <BottomTabRunderLogo />,
        })}
      />
      <BottomTab.Screen
        name="Result"
        component={ResultNavigator}
        options={() => ({
          title: '履歴',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <BottomTabIcon label="履歴" name="search" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={() => ({
          title: 'プロフィール',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <BottomTabIcon label="プロフィール" name="user" color={color} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

const BottomTabRunderLogo = () => {
  return (
    <Bounceable viewStyle={style.root} activeScale={0.95} bg="bg4">
      <RunderLogo />
    </Bounceable>
  );
};

const BottomTabIcon: FC<{
  label: string;
  name: 'mail' | 'award' | 'user' | 'search';
  color: string;
}> = ({ label, name, color }) => {
  return (
    <Bounceable viewStyle={style.icon} activeScale={0.9} bg="bg4">
      <FeatherIcon name={name} color={color} />
      <Text style={style.tab_label} lightColor={color} darkColor={color}>
        {label}
      </Text>
    </Bounceable>
  );
};

const style = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 999,
    padding: 34,
    marginTop: -10,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab_label: {
    flex: 1,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 10,
  },
});
