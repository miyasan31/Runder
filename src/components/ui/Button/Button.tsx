import type { FC, ReactElement } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { BounceableView, TouchableOpacity } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { StyleProps } from '~/types/style';

export type ButtonProps = StyleProps & {
  label: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isBorder?: true;
  activeOpacity?: number;
  onPress?: () => void;
};

export const Button: FC<ButtonProps> = memo(
  ({
    // 基本的に使用しない
    // custom themeで色を指定する
    lightBg,
    darkBg,
    lightText,
    darkText,
    // custom theme
    bg = 'bg1',
    color = 'text1',
    // ViewProps
    isBorder,
    outlineStyle,
    // TouchableOpacityProps
    activeOpacity = 0.9,
    bgStyle,
    // TextProps
    label,
    textStyle,
    // icon
    leftIcon,
    rightIcon,
    // onPress
    onPress,
  }) => {
    const borderColor = useThemeColor({}, isBorder ? 'border' : bg);

    return (
      <BounceableView bgStyle={[defaultStyle.outline, outlineStyle]} onPress={onPress}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={[defaultStyle.bg, bgStyle, { borderWidth: 1, borderColor }]}
          {...{ lightBg, darkBg, bg, activeOpacity }}
        >
          {leftIcon}
          <Text style={[defaultStyle.text, textStyle]} {...{ lightText, darkText, color }}>
            {label}
          </Text>
          {rightIcon}
        </TouchableOpacity>
      </BounceableView>
    );
  },
);

const defaultStyle = StyleSheet.create({
  outline: {
    width: '100%',
    borderRadius: 999,
  },
  bg: {
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
