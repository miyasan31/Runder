import type { VFC } from "react";
import React, { memo } from "react";
import { TouchableOpacity as NativeTouchableOpacity } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { ViewStyleProps } from "~/types/style";

export type TouchableOpacityProps = NativeTouchableOpacity["props"] & ViewStyleProps;

export const TouchableOpacity: VFC<TouchableOpacityProps> = memo(
  ({
    // 基本的に使用しない
    lightBg: light,
    darkBg: dark,
    // custome theme
    bgTheme = "bg1",
    // TextProps
    style,
    bgStyle,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bgTheme);

    return <NativeTouchableOpacity style={[style, bgStyle, { backgroundColor }]} {...otherProps} />;
  },
);
