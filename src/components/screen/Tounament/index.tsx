import "react-native-url-polyfill/auto";

import { format } from "date-fns";
import type { VFC } from "react";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Layout } from "~/components/ui/Layout";
import { ActivityIndicator, Progress } from "~/components/ui/Progress";
import { Text } from "~/components/ui/Text";
import { TextInput } from "~/components/ui/TextInput";
import { View } from "~/components/ui/View";
import { useSupabaseFilter, useSupabaseSelect } from "~/hooks/useSupabase";
import type { TounamentScreenProps } from "~/types";
import type { User } from "~/types/fetcher";

export type Props = TounamentScreenProps<"TounamentScreen">;

export const Tounament: VFC<Props> = () => {
  const filter = useSupabaseFilter((query) => query.limit(10), []);
  const { loading, error, data } = useSupabaseSelect<User>("user", {
    options: {
      count: "exact",
    },
    filter,
  });

  const onPress = () => console.info("click");

  if (loading) return <Progress />;
  if (error) return <Text>エラー</Text>;
  if (!data) return <Text>データなし</Text>;

  return (
    <Layout>
      <Progress />

      <ActivityIndicator />

      <Button label="サインイン" onPress={onPress} />
      <Button label="サインアウト" bgTheme="bg2" textTheme="text1" onPress={onPress} isBorder />

      <TextInput placeholder="テキスト" isBorder />

      <Text>no theme</Text>
      <Text textTheme="primary">primary primary primary</Text>
      <Text textTheme="accent">accent accent accent</Text>
      <Text textTheme="text0">text0 text0 text0</Text>
      <Text textTheme="text1">text1 text1 text1</Text>
      <Text textTheme="text2">text2 text2 text2</Text>
      <Text textTheme="text3">text3 text3 text3</Text>

      <FlatList data={data} renderItem={renderItem} keyExtractor={(item, _) => String(item.id)} />
    </Layout>
  );

  // eslint-disable-next-line func-style
  function renderItem({ item }: { item: User }) {
    const date = format(new Date(item.created_at), "yyyy年M月d日");
    const onNavigation = () => console.info("item.id", item.id);

    return (
      <Card bgStyle={style.list} isBorder onPress={onNavigation}>
        <View>
          <Text style={style.shopName}>{item.name}</Text>
          <Text textTheme="text2" style={style.date}>
            {date}
          </Text>
        </View>
      </Card>
    );
  }
};

const style = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    marginVertical: "1%",
  },
  shopName: {
    paddingBottom: 10,
    fontSize: 20,
    textAlign: "left",
  },
  date: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
  },
});
