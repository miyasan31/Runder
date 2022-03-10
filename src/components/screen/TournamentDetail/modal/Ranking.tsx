import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { SexAndAgeHierarchySelect } from '~/components/ui/SexAndAgeHierarchySelect';
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
    <>
      <View style={style.th_box}>
        <SexAndAgeHierarchySelect />

        <TableHead leftTitle="順位" rightTitle="記録" />
      </View>

      <FlatList
        data={data}
        style={flatListStyle.list}
        keyExtractor={(item, _) => String(item.rank)}
        renderItem={({ item }) => {
          return <RecordTableBody {...item} />;
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
