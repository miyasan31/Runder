import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { useTheme } from '~/hooks/useTheme';
import type { RelationshipStackParamList } from '~/types';

import { RelationshipScreen } from './relationship.screen';

const Relationship = createNativeStackNavigator<RelationshipStackParamList>();

export const RelationshipNavigator: FC = () => {
  const color = useTheme({}, 'color1');
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Relationship.Navigator
      initialRouteName="RelationshipScreen"
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
      <Relationship.Screen
        name="RelationshipScreen"
        component={RelationshipScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Relationship.Navigator>
  );
};
