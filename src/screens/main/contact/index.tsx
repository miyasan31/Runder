import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import type { ContactStackParamList } from '~/types';

import { ContactScreen } from './contact.screen';

const Contact = createNativeStackNavigator<ContactStackParamList>();

export const ContactNavigator: FC = () => {
  return (
    <Contact.Navigator
      initialRouteName="ContactScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Contact.Screen name="ContactScreen" component={ContactScreen} options={() => ({})} />
    </Contact.Navigator>
  );
};
