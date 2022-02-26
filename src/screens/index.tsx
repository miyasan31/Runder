import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import type { ColorSchemeName } from 'react-native';

import { linkingConfiguration } from '~/utils/linkingConfiguration';

import { RootNavigator } from './root';

type Props = {
  colorScheme: ColorSchemeName;
};

export const Navigations: FC<Props> = ({ colorScheme }) => {
  const systemTheme = useMemo(() => {
    return colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  }, [colorScheme]);

  return (
    <NavigationContainer linking={linkingConfiguration} theme={systemTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};
