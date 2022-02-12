import type { VFC } from "react";
import React from "react";
import { ActivityIndicator as NativeActivityIndicator, StyleSheet } from "react-native";

import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";

export const ActivityIndicator: VFC = () => {
  const primary = useThemeColor({}, "primary");

  return (
    <View style={defaultStyle.center}>
      <NativeActivityIndicator size="large" color={primary} />
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
