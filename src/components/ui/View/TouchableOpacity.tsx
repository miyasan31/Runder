import type { FC } from 'react';
import React, { memo } from 'react';
import { TouchableOpacity as NativeTouchableOpacity } from 'react-native';

import { useTheme } from '~/hooks/useTheme';
import type { ViewStyleProps } from '~/types/style';

export type TouchableOpacityProps = NativeTouchableOpacity['props'] & ViewStyleProps;

export const TouchableOpacity: FC<TouchableOpacityProps> = memo(
  ({
    // theme
    bg = 'bg0',
    lightBg,
    darkBg,
    border = 'border1',
    lightBorder,
    darkBorder,
    shadow = 'shadow1',
    lightShadow,
    darkShadow,
    // TouchableOpacityProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useTheme({ light: lightBg, dark: darkBg }, bg);
    const borderColor = useTheme({ light: lightBorder, dark: darkBorder }, border);
    const shadowColor = useTheme({ light: lightShadow, dark: darkShadow }, shadow);

    return (
      <NativeTouchableOpacity
        {...otherProps}
        style={[style, { backgroundColor, borderColor, shadowColor }]}
      />
    );
  },
);
