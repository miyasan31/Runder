import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { TextStyleProps } from '~/types/style';

export type TextProps = NativeText['props'] & TextStyleProps;

export const Text: FC<TextProps> = memo(
  ({
    // theme
    color: fontColor = 'color1',
    lightColor: light,
    darkColor: dark,
    // TextProps
    style,
    ...otherProps
  }) => {
    const color = useThemeColor({ light, dark }, fontColor);

    return <NativeText {...otherProps} style={[defaultStyle.text, style, { color }]} />;
  },
);

const defaultStyle = StyleSheet.create({
  text: {
    width: '100%',
  },
});
