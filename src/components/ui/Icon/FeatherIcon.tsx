import { Feather } from '@expo/vector-icons';
import type { ComponentProps, FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  name: ComponentProps<typeof Feather>['name'];
  size?: ComponentProps<typeof Feather>['size'];
  color?: ComponentProps<typeof Feather>['color'];
  style?: ComponentProps<typeof Feather>['style'];
};

export const FeatherIcon: FC<Props> = memo(({ size = 25, color, style, ...otherProps }) => {
  return <Feather {...otherProps} style={[defaultStyle.icon, style]} size={size} color={color} />;
});

const defaultStyle = StyleSheet.create({
  icon: {
    marginTop: 4,
  },
});
