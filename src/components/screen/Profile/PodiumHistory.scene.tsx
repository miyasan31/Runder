import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { HFlatList } from 'react-native-head-tab-view';

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

export const PodiumHistory: FC = () => {
  return (
    <HFlatList
      index={0}
      data={data}
      style={flatListStyle.list}
      keyExtractor={(item, _) => String(item.rank)}
      ListHeaderComponent={() => (
        <TableHead outlineStyle={style.table_head} leftTitle="順位" rightTitle="回数" />
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
