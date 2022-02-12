import type { ReactElement, VFC } from "react";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Bounceable } from "rn-bounceable";

import { Text } from "~/components/ui/Text";
import { TouchableOpacity, View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { StyleProps } from "~/types/style";

export type ButtonProps = StyleProps & {
  label: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isBorder?: true;
  activeOpacity?: number;
  onPress?: () => void;
};

export const Button: VFC<ButtonProps> = memo(
  ({
    // 基本的に使用しない
    lightBg,
    darkBg,
    lightText,
    darkText,
    // custome theme
    bgTheme = "primary",
    textTheme = "text0",
    // ViewProps
    isBorder,
    outlineStyle,
    // TouchableOpacityProps
    activeOpacity = 0.6,
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
    const borderColor = useThemeColor({}, isBorder ? "border" : bgTheme);

    return (
      <View style={[defaultStyle.outline, outlineStyle]}>
        <Bounceable onPress={onPress}>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={[defaultStyle.bg, bgStyle, { borderWidth: 1, borderColor }]}
            {...{ lightBg, darkBg, bgTheme, activeOpacity }}
          >
            {leftIcon}
            <Text style={[defaultStyle.text, textStyle]} {...{ lightText, darkText, textTheme }}>
              {label}
            </Text>
            {rightIcon}
          </TouchableOpacity>
        </Bounceable>
      </View>
    );
  },
);

const defaultStyle = StyleSheet.create({
  outline: {
    width: "100%",
    borderRadius: 999,
  },
  bg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 999,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
