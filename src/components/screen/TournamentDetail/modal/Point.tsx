import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { PointTableBody } from '~/components/model/point/PointTableBody';
import { TableHead } from '~/components/ui/Table';
import { flatListStyle } from '~/styles';

const data = [
  { rank: 1, point: 500 },
  { rank: 2, point: 400 },
  { rank: 3, point: 300 },
  { rank: 4, point: 200 },
  { rank: 5, point: 100 },
  { rank: 100, point: 10 },
];

export const Point: FC = () => {
  return (
    <FlatList
      data={data}
      style={flatListStyle.list}
      keyExtractor={(item, _) => String(item.rank)}
      ListHeaderComponent={() => (
        <TableHead outlineStyle={style.table_head} leftTitle="順位" rightTitle="獲得ポイント" />
      )}
      renderItem={({ item }) => {
        return <PointTableBody {...item} />;
      }}
    />
  );
};

const style = StyleSheet.create({
  table_head: {
    marginTop: '4%',
    marginBottom: '2%',
  },
});
