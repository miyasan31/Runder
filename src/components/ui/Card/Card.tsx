/* eslint-disable react-native/no-inline-styles */
import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Bounceable, TouchableOpacity } from '~/components/ui/View';
import type { CardStyleProps } from '~/types/style';

export type CardProps = CardStyleProps & {
  children: ReactNode;
  isBorder?: true;
  activeOpacity?: number;
  onPress?: () => void;
};

export const Card: FC<CardProps> = memo(
  ({
    // theme
    bg = 'bg1',
    lightBg,
    darkBg,
    border = 'border1',
    shadow = 'shadow1',
    // ViewProps
    isBorder,
    outlineStyle,
    // TouchableOpacityProps
    activeOpacity = 0.9,
    viewStyle,
    children,
    onPress,
    ...otherProps
  }) => {
    return (
      <Bounceable viewStyle={[defaultStyle.bounceable_view, outlineStyle]} onPress={onPress}>
        <TouchableOpacity
          style={[defaultStyle.touchable_opacity_view, viewStyle, isBorder && { borderWidth: 2 }]}
          {...{ bg, lightBg, darkBg, border, shadow, activeOpacity, otherProps }}
        >
          {children}
        </TouchableOpacity>
      </Bounceable>
    );
  },
);

const defaultStyle = StyleSheet.create({
  bounceable_view: {
    marginBottom: '4%',
  },
  touchable_opacity_view: {
    // borderRadius: 20,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    elevation: 1,
  },
});
