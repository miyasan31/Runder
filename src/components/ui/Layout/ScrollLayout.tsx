import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { ReactNode, VFC } from "react";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";

import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import { SafeAreaView } from "~/components/ui/View";
import type { ViewStyleProps } from "~/types/style";

type LayoutProps = ViewStyleProps & {
  children: ReactNode;
};

export const ScrollLayout: VFC<LayoutProps> = ({
  // 基本的に使用しない
  lightBg,
  darkBg,
  // custome theme
  bgTheme = "bg1",
  // ViewProps
  bgStyle,
  children,
}) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <KeyboardAvoiding>
      <SafeAreaView
        style={[defaultStyle.full, bgStyle, { marginBottom: tabBarHeight || 0 }]}
        {...{ lightBg, darkBg, bgTheme }}
      >
        {children}
      </SafeAreaView>
    </KeyboardAvoiding>
  );
};

const defaultStyle = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
});
