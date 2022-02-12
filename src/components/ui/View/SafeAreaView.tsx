import type { VFC } from "react";
import React, { memo } from "react";
import { SafeAreaView as NativeSafeAreaView, StyleSheet } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { ViewStyleProps } from "~/types/style";

export type SafeAreaViewProps = NativeSafeAreaView["props"] & ViewStyleProps;

export const SafeAreaView: VFC<SafeAreaViewProps> = memo(
  ({
    // 基本的に使用しない
    lightBg: light,
    darkBg: dark,
    // custome theme
    bgTheme = "bg1",
    // ViewProps
    style,
    bgStyle,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bgTheme);

    return (
      <NativeSafeAreaView
        style={[defaultStyle.bg, style, bgStyle, { backgroundColor }]}
        {...otherProps}
      />
    );
  },
);

const defaultStyle = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
