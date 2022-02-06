import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { VFC } from "react";
import React, { memo } from "react";
import { SafeAreaView as NativeSafeAreaView, StatusBar, StyleSheet } from "react-native";

import { useThemeColor } from "~/hooks";
import type { StyleProps } from "~/types/style";

export type SafeAreaViewProps = StyleProps & NativeSafeAreaView["props"];

export const CustomeSafeAreaView: VFC<SafeAreaViewProps> = memo((props) => {
  const { style, lightBgColor, darkBgColor, ...otherProps } = props;

  const tabBarHeight = useBottomTabBarHeight();

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg1");

  return (
    <NativeSafeAreaView
      style={[defaultStyles.bg, style, { backgroundColor }, { marginBottom: tabBarHeight || 0 }]}
      {...otherProps}
    />
  );
});

const defaultStyles = StyleSheet.create({
  bg: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
