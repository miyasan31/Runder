import type { VFC } from "react";
import React, { memo } from "react";
import { View as NativeView } from "react-native";

import { useThemeColor } from "~/hooks";
import type { StyleProps } from "~/types/style";

export type ViewProps = StyleProps & NativeView["props"];

export const CustomView: VFC<ViewProps> = memo((props) => {
  const { style, lightBgColor, darkBgColor, ...otherProps } = props;

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg1");

  return <NativeView style={[style, { backgroundColor }]} {...otherProps} />;
});
