import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { VFC } from 'react';
import React, { useMemo } from 'react';
import type { ColorSchemeName } from 'react-native';

import { ActivityIndicator } from '~/components/ui/Progress';
import { useListenSession } from '~/hooks/useListenSession';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { RootStackParamList } from '~/types';
import { linkingConfiguration } from '~/utils/linkingConfiguration';

import { NotFoundScreen } from './404.screen';
import { AuthNavigator } from './auth';
import { DevelopmentTabNavigator } from './development';
import { ModalScreen } from './hoge.modal';
import { BottomTabNavigator } from './main';

type Props = {
  colorScheme: ColorSchemeName;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigations: VFC<Props> = ({ colorScheme }) => {
  const session = useListenSession();
  const backgroundColor = useThemeColor({}, 'bg1');
  const systemTheme = useMemo(() => {
    return colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  }, [colorScheme]);

  if (!session) return <ActivityIndicator />;
  return (
    <NavigationContainer linking={linkingConfiguration} theme={systemTheme}>
      <RootStack.Navigator
        initialRouteName={session.route}
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor },
        }}
      >
        <RootStack.Screen name="Auth" component={AuthNavigator} />

        <RootStack.Screen name="Main" component={BottomTabNavigator} />

        <RootStack.Screen name="Development" component={DevelopmentTabNavigator} />

        <RootStack.Screen
          name="NotFoundScreen"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />

        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Modal" component={ModalScreen} options={{ title: 'Oops!' }} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
