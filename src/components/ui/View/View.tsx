import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet, View as NativeView } from 'react-native';

import { useTheme } from '~/hooks/useTheme';
import type { ViewStyleProps } from '~/types/style';

export type ViewProps = NativeView['props'] & ViewStyleProps;

export const View: FC<ViewProps> = memo(
  ({
    // theme
    bg = 'bg0',
    lightBg,
    darkBg,
    border = 'border1',
    lightBorder,
    darkBorder,
    shadow = 'shadow',
    lightShadow,
    darkShadow,
    // ViewProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useTheme({ light: lightBg, dark: darkBg }, bg);
    const borderColor = useTheme({ light: lightBorder, dark: darkBorder }, border);
    const shadowColor = useTheme({ light: lightShadow, dark: darkShadow }, shadow);

    return (
      <NativeView
        {...otherProps}
        style={[defaultStyle.view, style, { backgroundColor, borderColor, shadowColor }]}
      />
    );
  },
);

const defaultStyle = StyleSheet.create({
  view: {
    width: '100%',
  },
});
