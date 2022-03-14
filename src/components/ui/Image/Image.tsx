import type { FC } from 'react';
import React from 'react';
import type { StyleProp } from 'react-native';
import { Image as NativeImage } from 'react-native';

import { useTheme } from '~/hooks/useTheme';
import type { OutlineStyle, ViewStyleProps } from '~/types/style';

export type ImageProps = NativeImage['props'] &
  ViewStyleProps & {
    outlineStyle?: StyleProp<OutlineStyle>;
  };

export const Image: FC<ImageProps> = ({
  // theme
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
  const borderColor = useTheme({ light: lightBorder, dark: darkBorder }, border);
  const shadowColor = useTheme({ light: lightShadow, dark: darkShadow }, shadow);
  return <NativeImage {...otherProps} style={[style, { borderColor, shadowColor }]} />;
};
