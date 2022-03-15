import 'react-native-url-polyfill/auto';

import { format } from 'date-fns';
import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Card } from '~/components/ui/Card';
import { Progress } from '~/components/ui/Progress';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import type { User } from '~/types/fetcher';

import type { ContactScreenProps } from '.';

export const News: FC<ContactScreenProps> = () => {
  const filter = useSupabaseFilter((query) => query.limit(10), []);
  const { loading, error, data } = useSupabaseSelect<User>('user', {
    options: {
      count: 'exact',
    },
    filter,
  });

  if (loading) return <Progress />;
  if (error) return <Text>エラー</Text>;
  if (!data) return <Text>データなし</Text>;

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={(item, _) => String(item.id)} />
  );

  // eslint-disable-next-line func-style
  function renderItem({ item }: { item: User }) {
    const date = format(new Date(item.created_at || ''), 'yyyy年M月d日');
    const onNavigation = () => console.info('item.id', item.id);

    return (
      <Card viewStyle={style.root} isBorder onPress={onNavigation}>
        <View>
          <Text style={style.name}>{item.name}</Text>
          <Text style={style.date}>{date}</Text>
        </View>
      </Card>
    );
  }
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    marginVertical: '1%',
  },
  name: {
    paddingBottom: 10,
    fontSize: 20,
    textAlign: 'left',
  },
  date: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
  },
});
