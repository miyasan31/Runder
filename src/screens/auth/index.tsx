import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React from 'react';

import type { AuthStackParamList } from '~/types';

import { SigninScreen } from './signin.screen';
import { SignupScreen } from './signup.screen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: VFC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SigninScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SigninScreen" component={SigninScreen} options={{}} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} options={{}} />
    </AuthStack.Navigator>
  );
};
