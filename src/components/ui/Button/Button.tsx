/* eslint-disable react-native/no-inline-styles */
import type { FC, ReactElement } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { Bounceable, TouchableOpacity } from '~/components/ui/View';
import type { ButtonStyleProps } from '~/types/style';

export type ButtonProps = ButtonStyleProps & {
  label: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isBorder?: true;
  activeOpacity?: number;
  onPress?: () => void;
};

export const Button: FC<ButtonProps> = memo(
  ({
    // theme
    bg = 'bg1',
    lightBg,
    darkBg,
    color = 'color1',
    lightColor,
    darkColor,
    border = 'border1',
    shadow = 'shadow1',
    // ViewProps
    isBorder,
    outlineStyle,
    // TouchableOpacityProps
    activeOpacity = 0.9,
    viewStyle,
    // TextProps
    label,
    textStyle,
    // icon
    leftIcon,
    rightIcon,
    // onPress
    onPress,
    ...otherProps
  }) => {
    return (
      <Bounceable viewStyle={[defaultStyle.outline, outlineStyle]} onPress={onPress}>
        <TouchableOpacity
          style={[defaultStyle.view, viewStyle, isBorder && { borderWidth: 1.2 }]}
          {...{ bg, lightBg, darkBg, border, shadow, activeOpacity, otherProps }}
        >
          {leftIcon}
          <Text style={[defaultStyle.text, textStyle]} {...{ lightColor, darkColor, color }}>
            {label}
          </Text>
          {rightIcon}
        </TouchableOpacity>
      </Bounceable>
    );
  },
);

const defaultStyle = StyleSheet.create({
  outline: {
    width: '100%',
    borderRadius: 999,
  },
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    paddingVertical: 18,
    borderRadius: 999,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
