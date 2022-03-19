import type { FC } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { NewsList } from '~/components/model/news/NewsList';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';

import type { ContactScreenProps } from '.';

const data = [
  { id: 1, title: 'お知らせ1 お知らせ1 お知らせ1', created_at: new Date(2020, 0, 1) },
  { id: 2, title: 'お知らせ2 お知らせ2 お知らせ2', created_at: new Date(2020, 0, 1) },
  { id: 3, title: 'お知らせ3 お知らせ3 お知らせ3', created_at: new Date(2020, 0, 1) },
  { id: 4, title: 'お知らせ4 お知らせ4 お知らせ4', created_at: new Date(2020, 0, 1) },
];

export const News: FC<ContactScreenProps> = () => {
  return (
    <FlatList
      data={data}
      style={flatListStyle.list}
      ItemSeparatorComponent={() => <View style={flatListStyle.separator} />}
      renderItem={({ item }) => <NewsList {...item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
