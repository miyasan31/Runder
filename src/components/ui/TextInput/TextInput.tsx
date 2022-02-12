import type { VFC } from "react";
import React, { memo } from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { StyleProps } from "~/types/style";

export type TextInputProps = StyleProps &
  NativeTextInput["props"] & {
    isBorder?: true;
  };

export const TextInput: VFC<TextInputProps> = memo(
  ({
    // 基本的に使用しない
    lightBg,
    darkBg,
    lightText: light,
    darkText: dark,
    // custome theme
    bgTheme = "bg3",
    textTheme = "text1",
    // ViewProps
    isBorder,
    bgStyle,
    outlineStyle,
    // TextInputProps
    style,
    textStyle,
    secureTextEntry = false,
    ...otherProps
  }) => {
    const color = useThemeColor({ light, dark }, textTheme);
    const borderColor = useThemeColor({}, isBorder ? "border" : bgTheme);

    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={[defaultStyle.bg, bgStyle, outlineStyle, { borderWidth: 1, borderColor }]}
        {...{ lightBg, darkBg, bgTheme }}
      >
        <NativeTextInput
          secureTextEntry={secureTextEntry}
          style={[style, textStyle, { color }]}
          {...otherProps}
        />
      </View>
    );
  },
);

const defaultStyle = StyleSheet.create({
  bg: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 999,
  },
});
