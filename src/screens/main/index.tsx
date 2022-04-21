import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { BlurView } from 'expo-blur';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import {
  BellIcon,
  IdentificationIcon,
  LightningBoltIcon,
  UserGroupIcon,
} from '~/components/ui/Icon';
import { LightningBoltIconSolid } from '~/components/ui/Icon/LightningBoltIconSolid';
import { SearchIcon } from '~/components/ui/Icon/SearchIcon';
import { Text } from '~/components/ui/Text';
import { Bounceable } from '~/components/ui/View';
import { useTheme } from '~/hooks/useTheme';
import type { MainBottomTabParamList } from '~/types';

import { ProfileNavigator } from './profile';
import { RankingNavigator } from './ranking';
import { RelationshipNavigator } from './relationship';
import { ResultNavigator } from './result';
import { TournamentNavigator } from './tournament';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTabNavigator: FC = () => {
  const backgroundColor = useTheme({}, 'bg4');

  return (
    <BottomTab.Navigator
      initialRouteName="Tournament"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: 'absolute', backgroundColor },
        // tabBarBackground: () => <BlurView intensity={10} style={StyleSheet.absoluteFill} />,
      }}
    >
      <BottomTab.Screen
        name="Relationship"
        component={RelationshipNavigator}
        options={{
          tabBarLabel: 'お知らせ',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon label="お知らせ" type="mail" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Ranking"
        component={RankingNavigator}
        options={() => ({
          title: 'ランキング',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon label="ランキング" type="ranking" focused={focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Tournament"
        component={TournamentNavigator}
        options={() => ({
          title: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <BottomTabThunderLogo focused={focused} />,
        })}
      />
      <BottomTab.Screen
        name="Result"
        component={ResultNavigator}
        options={() => ({
          title: '履歴',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon label="履歴" type="result" focused={focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={() => ({
          title: 'プロフィール',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon label="プロフィール" type="profile" focused={focused} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

const BottomTabThunderLogo: FC<{ focused: boolean }> = ({ focused }) => {
  const iconColor = focused ? 'primary' : 'icon2';
  return (
    <Bounceable viewStyle={style.tournament_icon} activeScale={0.95} bg="bg4">
      {focused ? (
        <LightningBoltIconSolid size={36} icon={iconColor} />
      ) : (
        <LightningBoltIcon size={36} icon={iconColor} />
      )}
    </Bounceable>
  );
};

const BottomTabIcon: FC<{
  label: string;
  type: 'mail' | 'ranking' | 'result' | 'profile';
  focused: boolean;
}> = ({ label, type, focused }) => {
  const iconColor = focused ? 'primary' : 'icon2';
  return (
    <Bounceable viewStyle={style.icon} activeScale={0.9} bg="bg4">
      {type === 'mail' && <BellIcon size={28} icon={iconColor} />}
      {type === 'ranking' && <UserGroupIcon size={28} icon={iconColor} />}
      {type === 'result' && <SearchIcon size={28} icon={iconColor} />}
      {type === 'profile' && <IdentificationIcon size={28} icon={iconColor} />}
      <Text style={style.tab_label} color={focused ? 'primary' : 'color3'}>
        {label}
      </Text>
    </Bounceable>
  );
};

const style = StyleSheet.create({
  tournament_icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 999,
    padding: 32,
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
    marginTop: 4,
  },
  tab_label: {
    flex: 1,
    marginTop: 2,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '500',
  },
});
