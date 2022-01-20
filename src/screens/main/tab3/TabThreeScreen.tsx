import { MaterialIcons } from "@expo/vector-icons";
import type { VFC } from "react";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "src/components";
import { Text, View } from "src/components/custom";
import { Layout } from "src/components/layout";
import { useThemeColor } from "src/hooks";
import type { TabThreeScreenProps } from "types";

type List = {
  id: string;
  label: string;
  screen: "Settings";
};

const data: Readonly<List[]> = [{ id: "1", screen: "Settings", label: "設定" }];

export const TabThreeScreen: VFC<TabThreeScreenProps<"TabThreeScreen">> = () => {
  const icon1 = useThemeColor({}, "icon1");
  const accent = useThemeColor({}, "accent");

  const onNavigation = (screen: List["screen"]) => {
    console.info("screen", screen);
  };

  const onClick = useCallback(() => {
    console.info("click");
  }, []);

  return (
    <Layout style={styles.full}>
      {data.map((item) => {
        return (
          <ListItem key={item.id} style={styles.list} onPress={() => onNavigation(item.screen)}>
            <View style={styles.listbox}>
              <Text style={styles.key}>{item.label}</Text>
              <MaterialIcons name="keyboard-arrow-right" size={24} color={icon1} />
            </View>
          </ListItem>
        );
      })}

      <ListItem style={styles.list} onPress={onClick}>
        <View style={[styles.listbox, styles.borderNone]}>
          <Text style={styles.key} lightTextColor={accent} darkTextColor={accent}>
            サインアウト
          </Text>
        </View>
      </ListItem>
    </Layout>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: "flex-start",
  },
  list: {
    width: "100%",
  },
  listbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b333",
  },
  key: {
    width: "90%",
    fontSize: 18,
    textAlign: "left",
    fontWeight: "400",
  },
  borderNone: {
    borderBottomWidth: 0,
  },
});
