import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React from 'react';

import type { AuthStackParamList } from '~/types';

import { SignInScreen } from './signin.screen';
import { SignInEmailScreen } from './signin_email.screen';
import { SignUpScreen } from './signup.screen';
import { UserRegisterScreen } from './user_register.screen';

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
      <AuthStack.Screen name="SignInEmailScreen" component={SignInEmailScreen} options={{}} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} options={{}} />
      <AuthStack.Screen name="UserRegisterScreen" component={UserRegisterScreen} options={{}} />
    </AuthStack.Navigator>
  );
};
