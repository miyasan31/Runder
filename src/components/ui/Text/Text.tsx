import type { VFC } from "react";
import React, { memo } from "react";
import { StyleSheet, Text as NativeText } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { TextStyleProps } from "~/types/style";

export type TextProps = NativeText["props"] & TextStyleProps;

export const Text: VFC<TextProps> = memo(
  ({
    // 基本的に使用しない
    // custome themeで色を指定する
    lightText: light,
    darkText: dark,
    // custome theme
    textTheme = "text1",
    // TextProps
    style,
    textStyle,
    ...otherProps
  }) => {
    const color = useThemeColor({ light, dark }, textTheme);

    return <NativeText style={[defaultStyle.text, style, textStyle, { color }]} {...otherProps} />;
  },
);

const defaultStyle = StyleSheet.create({
  text: {
    width: "100%",
  },
});
