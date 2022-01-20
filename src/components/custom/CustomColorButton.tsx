import type { VFC } from "react";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity as NativeTouchableOpacity } from "react-native";
import type { TextProps } from "src/components/custom/CustomText";
import { CustomText as Text } from "src/components/custom/CustomText";
import { CustomView as View } from "src/components/custom/CustomView";
import { useThemeColor } from "src/hooks";
import type { StyleProps } from "types/style";

export type ColorButtonProps = StyleProps &
  TextProps &
  NativeTouchableOpacity["props"] & {
    title?: string;
  };

export const CustomColorButton: VFC<ColorButtonProps> = memo((props) => {
  const {
    // TextProps
    title,
    children,
    textStyle,
    lightTextColor,
    darkTextColor,
    // TouchableOpacityProps
    bgStyle,
    lightBgColor,
    darkBgColor,
    // ViewProps
    outlineStyle,
    onPress,
  } = props;

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "primary");
  const color = useThemeColor({ light: lightTextColor, dark: darkTextColor }, "text3");

  return (
    <View style={[defaultStyles.outline, outlineStyle]}>
      <NativeTouchableOpacity
        style={[defaultStyles.bg, bgStyle, { backgroundColor }]}
        activeOpacity={0.4}
        onPress={onPress}
      >
        {children}

        {title ? (
          <Text
            lightTextColor={color}
            darkTextColor={color}
            style={[defaultStyles.text, textStyle]}
          >
            {title}
          </Text>
        ) : null}
      </NativeTouchableOpacity>
    </View>
  );
});

const defaultStyles = StyleSheet.create({
  outline: {
    width: "100%",
    borderRadius: 9999,
  },
  bg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 9999,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
