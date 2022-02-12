import "react-native-url-polyfill/auto";

import { format } from "date-fns";
import type { VFC } from "react";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import { Button } from "~/components/ui/Button";
import { ListItem } from "~/components/ui/ListItem";
import { ActivityIndicator, Progress } from "~/components/ui/Progress";
import { Text } from "~/components/ui/Text";
import { TextInput } from "~/components/ui/TextInput";
import { View } from "~/components/ui/View";
import { useSupabaseFilter, useSupabaseSelect } from "~/hooks/useSupabase";
import type { TounamentScreenProps } from "~/types";
import type { User } from "~/types/fetcher";

export type Props = TounamentScreenProps<"TounamentScreen">;

export const Tounament: VFC<Props> = () => {
  const onPress = () => {
    console.info("click");
  };

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
    <KeyboardAvoiding>
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
    </KeyboardAvoiding>
  );

  // eslint-disable-next-line func-style
  function renderItem({ item }: { item: User }) {
    const date = format(new Date(item.created_at), "yyyy年M月d日");
    const onNavigation = () => console.info("item.id", item.id);

    return (
      <ListItem bgStyle={styles.list} onPress={onNavigation}>
        <View bgTheme="bg2">
          <Text style={styles.shopName}>{item.name}</Text>
          <Text textTheme="text2" style={styles.date}>
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
    fontSize: 20,
    textAlign: "left",
  },
  date: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
  },
});
