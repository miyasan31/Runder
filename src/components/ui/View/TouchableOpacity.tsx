import type { FC } from 'react';
import React, { memo } from 'react';
import { TouchableOpacity as NativeTouchableOpacity } from 'react-native';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { ViewStyleProps } from '~/types/style';

export type TouchableOpacityProps = NativeTouchableOpacity['props'] & ViewStyleProps;

export const TouchableOpacity: FC<TouchableOpacityProps> = memo(
  ({
    // custom theme
    bg = 'bg0',
    lightBg: light,
    darkBg: dark,
    // TouchableOpacityProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bg);
    const shadowColor = useThemeColor({ light, dark }, 'shadow');

    return (
      <NativeTouchableOpacity {...otherProps} style={[style, { backgroundColor, shadowColor }]} />
    );
  },
);
