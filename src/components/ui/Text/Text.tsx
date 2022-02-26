import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { TextStyleProps } from '~/types/style';

export type TextProps = NativeText['props'] & TextStyleProps;

export const Text: FC<TextProps> = memo(
  ({
    // 基本的に使用しない
    // custom themeで色を指定する
    lightColor: light,
    darkColor: dark,
    // custom theme
    color: fontColor = 'color1',
    // TextProps
    style,
    ...otherProps
  }) => {
    const color = useThemeColor({ light, dark }, fontColor);

    return <NativeText style={[defaultStyle.text, style, { color }]} {...otherProps} />;
  },
);

const defaultStyle = StyleSheet.create({
  text: {
    width: '100%',
  },
});
