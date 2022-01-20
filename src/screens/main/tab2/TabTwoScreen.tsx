import { format } from "date-fns";
import type { VFC } from "react";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem, Progress } from "src/components";
import { Text, View } from "src/components/custom";
import { SafeAreaLayout } from "src/components/layout";
import { useGetSWRdev, useThemeColor } from "src/hooks";
import type { TabTwoScreenProps } from "types";
import type { Post } from "types/fetcher";

export const TabTwoScreen: VFC<TabTwoScreenProps<"TabTwoScreen">> = () => {
  const color = useThemeColor({}, "text2");
  const { data, isError, isLoading } = useGetSWRdev<Post[]>("/post");

  const renderItem = ({ item }: { item: Post }) => {
    const onNavigation = () => {
      console.info("item.id", item.id);
    };

    const date = format(new Date(item.updatedAt), "yyyy年M月d日");

    return (
      <ListItem style={styles.list} onPress={onNavigation}>
        <View>
          <Text style={styles.shopName}>{item.title}</Text>
          <Text style={styles.date} lightTextColor={color} darkTextColor={color}>
            {date}
          </Text>
        </View>
      </ListItem>
    );
  };

  return (
    <SafeAreaLayout>
      {isLoading ? (
        <Progress />
      ) : isError ? (
        <Text>エラーが発生しました</Text>
      ) : !data ? (
        <Text>データがありません</Text>
      ) : (
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item, _) => String(item.id)} />
      )}
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 15,
    marginHorizontal: "1%",

    borderBottomWidth: 1,
    borderBottomColor: "#88888833",
  },
  shopName: {
    paddingBottom: 10,

    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
  },
  date: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
  },
});
