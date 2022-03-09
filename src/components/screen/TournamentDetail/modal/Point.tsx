import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { PointTableBody } from '~/components/model/Point/PointTableBody';
import { TableHead } from '~/components/ui/Table';
import { View } from '~/components/ui/View';
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
    <>
      <View style={style.th_box}>
        <TableHead leftTitle="順位" rightTitle="獲得ポイント" />
      </View>

      <FlatList
        data={data}
        style={flatListStyle.inner_list}
        keyExtractor={(item, _) => String(item.rank)}
        renderItem={({ item }) => {
          return <PointTableBody {...item} />;
        }}
      />
    </>
  );
};

const style = StyleSheet.create({
  th_box: {
    padding: '4%',
    paddingBottom: '1%',
  },
});
