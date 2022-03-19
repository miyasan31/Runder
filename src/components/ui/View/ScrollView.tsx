import type { FC } from 'react';
import React, { memo } from 'react';
import { ScrollView as NativeScrollView, StyleSheet } from 'react-native';

import { useTheme } from '~/hooks/useTheme';
import type { ViewStyleProps } from '~/types/style';

export type ViewProps = NativeScrollView['props'] & ViewStyleProps;

export const ScrollView: FC<ViewProps> = memo(
  ({
    // theme
    bg = 'bg0',
    lightBg,
    darkBg,
    border = 'border1',
    lightBorder,
    darkBorder,
    shadow = 'shadow1',
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
      <NativeScrollView
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
