import type { VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import * as RNProgress from "react-native-progress";
import { View } from "src/components/custom";
import { useThemeColor } from "src/hooks/useThemeColor";

export const Progress: VFC = () => {
  const primary = useThemeColor({}, "primary");
  return (
    <View style={defaultStyle.center}>
      <RNProgress.CircleSnail color={primary} size={60} thickness={4} spinDuration={800} />
    </View>
  );
};

const defaultStyle = StyleSheet.create({
  center: {
    flex: 1,
    paddingTop: 120,
    width: "100%",
    alignItems: "center",
  },
});
