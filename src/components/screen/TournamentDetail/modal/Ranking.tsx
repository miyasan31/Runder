import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/Record/RecordTableBody';
import { TableHead } from '~/components/ui/Table';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';

const data = [
  { rank: 1, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 2, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 3, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 4, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 100, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
];

export const Ranking: FC = () => {
  return (
    <View style={style.content}>
      <TableHead leftTitle="順位" rightTitle="記録" />
      <FlatList
        data={data}
        style={flatListStyle.list}
        contentContainerStyle={[flatListStyle.container, style.container]}
        keyExtractor={(item, _) => String(item.rank)}
        renderItem={({ item }) => {
          return <RecordTableBody {...item} />;
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    padding: '4%',
  },
  container: {
    paddingTop: '1%',
  },
});
