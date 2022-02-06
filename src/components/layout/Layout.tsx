/* eslint-disable react/destructuring-assignment */
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { ReactNode, VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import type { ViewProps } from "~/components/custom";
import { View } from "~/components/custom";
import { KeyboardAvoiding } from "~/components/layout/KeyboardAvoiding";
import { useThemeColor } from "~/hooks";

type Props = ViewProps & {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { style, lightBgColor, darkBgColor, children } = props;

  const tabBarHeight = useBottomTabBarHeight();

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg1");
  return (
    <KeyboardAvoiding>
      <View
        style={[defaultStyle.full, style, { backgroundColor }, { marginBottom: tabBarHeight || 0 }]}
      >
        {children}
      </View>
    </KeyboardAvoiding>
  );
};

const defaultStyle = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  semi: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: "10%",
  },
});
