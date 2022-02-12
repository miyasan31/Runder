import type { VFC } from "react";
import React, { memo } from "react";
import { View as NativeView } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { ViewStyleProps } from "~/types/style";

export type ViewProps = NativeView["props"] & ViewStyleProps;

export const View: VFC<ViewProps> = memo(
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

    return <NativeView style={[style, bgStyle, { backgroundColor }]} {...otherProps} />;
  },
);
