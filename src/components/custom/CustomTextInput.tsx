import type { VFC } from "react";
import React, { memo } from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

import type { ViewProps } from "~/components/custom/CustomView";
import { CustomView as View } from "~/components/custom/CustomView";
import { useThemeColor } from "~/hooks";
import type { StyleProps } from "~/types/style";

export type TextInputProps = StyleProps & ViewProps & NativeTextInput["props"];

export const CustomTextInput: VFC<TextInputProps> = memo((props) => {
  const {
    textStyle,
    lightTextColor,
    darkTextColor,
    lightBgColor,
    darkBgColor,
    bgStyle,
    secureTextEntry = false,
    ...otherProps
  } = props;

  const color = useThemeColor({ light: lightTextColor, dark: darkTextColor }, "text1");
  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg2");

  return (
    <View
      style={[defaultStyles.bg, bgStyle]}
      lightBgColor={backgroundColor}
      darkBgColor={backgroundColor}
    >
      <NativeTextInput
        style={[textStyle, { color }]}
        {...otherProps}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
});

const defaultStyles = StyleSheet.create({
  bg: {
    width: "100%",
    padding: 10,
  },
});
