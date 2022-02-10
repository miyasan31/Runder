import "react-native-url-polyfill/auto";

// import { format } from "date-fns";
import type { VFC } from "react";
import React, { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { RadioButton, RadioGroup, Switch, TextField } from "react-native-ui-lib";

// import { Bounceable } from "rn-bounceable";
import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import { Button } from "~/components/ui/Button";
import { ListItem } from "~/components/ui/ListItem";
import { Progress } from "~/components/ui/Progress";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import { useSupabaseFilter, useSupabaseSelect } from "~/hooks/useSupabase";
// import { useThemeColor } from "~/hooks/useThemeColor";
import type { TounamentScreenProps } from "~/types";
import type { User } from "~/types/fetcher";

export type Props = TounamentScreenProps<"TounamentScreen">;

export const Tounament: VFC<Props> = () => {
  // const color = useThemeColor({}, "text2");

  const filter = useSupabaseFilter((query) => query.limit(10), []);
  const { loading, error, data } = useSupabaseSelect<User>("user", {
    options: {
      count: "exact",
    },
    filter,
  });

  const [text, setText] = useState("");
  const onChangeText = useCallback((text) => setText(text), []);

  // Switch
  const [isOn, setIsOn] = useState(false);
  const onToggleSwitch = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  // Radio
  const [selectedValue, setSelectedValue] = useState("1");
  const onRadioSelect = useCallback((value) => {
    setSelectedValue(value);
  }, []);

  if (loading) return <Progress />;
  if (error) return <Text>エラー</Text>;
  if (!data) return <Text>データなし</Text>;

  return (
    <KeyboardAvoiding>
      <ActivityIndicator size="large" color="#DDDDDD" />
      {/* <Bounceable>
        <RNUIButton label="サインインする" activeOpacity={1} borderRadius={9999} />
      </Bounceable> */}
      {/* <Text text-main>text-main</Text>
      <Text text-sub>text-sub</Text>
      <Text text-thin>text-thin</Text>
      <Text primary>primary</Text>
      <Text accent>accent</Text> */}

      <Text primary margin-10>
        text-bg
      </Text>
      <Text accent>text-bg</Text>
      <Text green10>text-bg</Text>
      <Text text2>text-bg</Text>
      <Text text3>text-bg</Text>
      <Text text4>text-bg</Text>

      <Button label="サインインする" bgTheme="3" textTheme="accent" isBorder />

      <TextField value={text} onValueChange={onChangeText} migrate />
      <Switch value={isOn} onValueChange={onToggleSwitch} />
      <RadioGroup initialValue={selectedValue} onValueChange={onRadioSelect}>
        <RadioButton value="1" label="1" />
        <RadioButton value="2" label="2" />
        <RadioButton value="3" label="3" />
      </RadioGroup>
      <FlatList data={data} renderItem={RenderItem} keyExtractor={(item, _) => String(item.id)} />
    </KeyboardAvoiding>
  );

  // eslint-disable-next-line func-style
  function RenderItem({ item }: { item: User }) {
    // const date = format(new Date(item.created_at), "yyyy年M月d日");
    const onNavigation = () => console.info("item.id", item.id);
    return (
      <ListItem style={styles.list} onPress={onNavigation}>
        <View>
          {/* <Text style={styles.shopName}>{item.name}</Text> */}
          {/* <Text style={styles.date} lightTextColor={color} darkTextColor={color}> */}
          {/* {date}
          </Text> */}
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
