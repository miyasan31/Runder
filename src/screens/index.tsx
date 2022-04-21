import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import type { FC } from 'react';
import React from 'react';

import { useColorScheme } from '~/hooks/useColorScheme';
import { linkingConfiguration } from '~/utils/linkingConfiguration';

import { RootNavigator } from './root';

export const Navigation: FC = () => {
  const colorScheme = useColorScheme();
  const systemTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer linking={linkingConfiguration} theme={systemTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};
