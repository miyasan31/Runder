import type { VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import * as RNProgress from "react-native-progress";

import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";

export const Progress: VFC = () => {
  const primary = useThemeColor({}, "primary");

  return (
    <View style={defaultStyle.center}>
      <RNProgress.CircleSnail color={primary} size={50} thickness={4} spinDuration={800} />
    </View>
  );
};

const defaultStyle = StyleSheet.create({
  center: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
