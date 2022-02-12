import { StatusBar } from "expo-status-bar";
import type { VFC } from "react";
import React from "react";
import { Platform, StyleSheet } from "react-native";

import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import type { StackScreenProps } from "~/types";

export type Props = StackScreenProps<"Modal">;

export const Modal: VFC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal 1</Text>
      <View style={styles.separator} lightBg="#eee" darkBg="rgba(255,255,255,0.1)" />
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
