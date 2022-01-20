import type { VFC } from "react";
import React, { memo } from "react";
import { StyleSheet, Text as NativeText } from "react-native";
import { useThemeColor } from "src/hooks/useThemeColor";
import type { StyleProps } from "types/style";

export type TextProps = StyleProps & NativeText["props"];

export const CustomText: VFC<TextProps> = memo((props) => {
  const { style, lightTextColor, darkTextColor, ...otherProps } = props;

  const color = useThemeColor({ light: lightTextColor, dark: darkTextColor }, "text1");

  return <NativeText style={[defaultStyles.text, style, { color }]} {...otherProps} />;
});

const defaultStyles = StyleSheet.create({
  text: {
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});
