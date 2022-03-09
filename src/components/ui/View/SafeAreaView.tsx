import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '~/hooks/useTheme';
import type { ViewStyleProps } from '~/types/style';

export type SafeAreaViewProps = NativeSafeAreaViewProps & ViewStyleProps;

export const SafeAreaView: FC<SafeAreaViewProps> = memo(
  ({
    // theme
    bg = 'bg0',
    lightBg,
    darkBg,
    border = 'border',
    lightBorder,
    darkBorder,
    shadow = 'shadow',
    lightShadow,
    darkShadow,
    // SafeAreaViewProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useTheme({ light: lightBg, dark: darkBg }, bg);
    const borderColor = useTheme({ light: lightBorder, dark: darkBorder }, border);
    const shadowColor = useTheme({ light: lightShadow, dark: darkShadow }, shadow);

    return (
      <NativeSafeAreaView
        {...otherProps}
        style={[defaultStyle.view, style, { backgroundColor, borderColor, shadowColor }]}
      />
    );
  },
);

const defaultStyle = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
