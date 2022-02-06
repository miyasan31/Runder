import "react-native-url-polyfill/auto";

import { format } from "date-fns";
import type { VFC } from "react";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { ListItem, Progress } from "~/components";
import { Text, View } from "~/components/custom";
import { SafeAreaLayout } from "~/components/layout";
import { useSupabaseFilter, useSupabaseSelect, useThemeColor } from "~/hooks";
import type { ResultScreenProps } from "~/types";
import type { User } from "~/types/fetcher";

export const ResultScreen: VFC<ResultScreenProps<"ResultScreen">> = () => {
  const color = useThemeColor({}, "text2");

  const filter = useSupabaseFilter((query) => query.limit(10), []);
  const { loading, error, data } = useSupabaseSelect<User>("user", {
    options: {
      count: "exact",
    },
    filter,
  });

  if (loading) return <Progress />;
  if (error) return <Text>エラー</Text>;
  if (!data) return <Text>データなし</Text>;

  return (
    <SafeAreaLayout>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item, _) => String(item.id)} />
    </SafeAreaLayout>
  );

  // eslint-disable-next-line func-style
  function renderItem({ item }: { item: User }) {
    const date = format(new Date(item.created_at), "yyyy年M月d日");
    const onNavigation = () => console.info("item.id", item.id);
    return (
      <ListItem style={styles.list} onPress={onNavigation}>
        <View>
          <Text style={styles.shopName}>{item.name}</Text>
          <Text style={styles.date} lightTextColor={color} darkTextColor={color}>
            {date}
          </Text>
        </View>
      </ListItem>
    );
  }
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
