import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React from 'react';

import type { AuthStackParamList } from '~/types';

import { SignInScreen } from './signin.screen';
import { SignUpScreen } from './signup.screen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: VFC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} options={{}} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} options={{}} />
    </AuthStack.Navigator>
  );
};
