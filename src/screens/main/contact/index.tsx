import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { useTheme } from '~/hooks/useTheme';
import type { ContactStackParamList } from '~/types';

import { ContactScreen } from './contact.screen';

const Contact = createNativeStackNavigator<ContactStackParamList>();

export const ContactNavigator: FC = () => {
  const color = useTheme({}, 'color1');
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Contact.Navigator
      initialRouteName="ContactScreen"
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
      <Contact.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Contact.Navigator>
  );
};
