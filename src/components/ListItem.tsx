import type { ReactNode, VFC } from "react";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity as NativeTouchableOpacity } from "react-native";
import { useThemeColor } from "src/hooks";
import type { StyleProps } from "types/style";

export type ColorButtonProps = StyleProps &
  NativeTouchableOpacity["props"] & {
    children: ReactNode;
    onPress: () => void;
  };

export const ListItem: VFC<ColorButtonProps> = memo((props) => {
  const { style, lightBgColor, darkBgColor, ...otherProps } = props;

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg1");

  return (
    <NativeTouchableOpacity
      style={[defaultStyles.bg, style, { backgroundColor }]}
      activeOpacity={0.4}
      {...otherProps}
    >
      {props.children}
    </NativeTouchableOpacity>
  );
});

const defaultStyles = StyleSheet.create({
  bg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
