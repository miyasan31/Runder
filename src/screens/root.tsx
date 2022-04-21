import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { ActivityIndicator } from '~/components/ui/Progress';
import { useListenSession } from '~/hooks/useListenSession';
import { useTheme } from '~/hooks/useTheme';
import type { RootStackParamList } from '~/types';

import { NotFoundScreen } from './404.screen';
import { SignInScreen } from './auth/signin.screen';
import { SignInEmailScreen } from './auth/signin_email.screen';
import { SignUpScreen } from './auth/signup.screen';
import { UserRegisterScreen } from './auth/user_register.screen';
import { DevelopmentTabNavigator } from './development';
import { BottomTabNavigator } from './main';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  const session = useListenSession();
  const backgroundColor = useTheme({}, 'bg1');

  if (!session) return <ActivityIndicator message="サインイン処理中..." />;

  return (
    <RootStack.Navigator
      initialRouteName={session.route}
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor },
      }}
    >
      <RootStack.Group>
        <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{}} />
        <RootStack.Screen name="SignInEmailScreen" component={SignInEmailScreen} options={{}} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{}} />
        <RootStack.Screen name="UserRegisterScreen" component={UserRegisterScreen} options={{}} />
      </RootStack.Group>

      <RootStack.Screen name="Main" component={BottomTabNavigator} />

      <RootStack.Screen name="Development" component={DevelopmentTabNavigator} />

      <RootStack.Screen
        name="NotFoundScreen"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </RootStack.Navigator>
  );
};
