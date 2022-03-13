import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { SexAndAgeHierarchySelect } from '~/components/ui/SexAndAgeHierarchySelect';
import { TableHead } from '~/components/ui/Table';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';

import type { RankingScreenProps } from './ScreenProps';

const data = [
  { rank: 1, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 2, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 3, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 4, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 5, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 6, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 7, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 8, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 9, point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 100, point: 100, user: { name: 'ユーザー1', icon: '' } },
];

export const MonthlyRankingScene: FC<RankingScreenProps> = () => {
  return (
    <FlatList
      data={data}
      style={flatListStyle.list}
      keyExtractor={(item, _) => String(item.rank)}
      ListHeaderComponent={() => (
        <>
          <SexAndAgeHierarchySelect outlineStyle={style.sex_and_age_hierarchy_box} />
          <TableHead outlineStyle={style.table_head} leftTitle="順位" rightTitle="ポイント" />
        </>
      )}
      renderItem={({ item }) => <RecordTableBody {...item} outlineStyle={style.list} />}
      ListFooterComponent={() => <View style={flatListStyle.bottom_space_medium} />}
    />
  );
};

const style = StyleSheet.create({
  sex_and_age_hierarchy_box: {
    paddingTop: '4%',
  },
  list: {
    paddingHorizontal: '2%',
  },
  table_head: {
    marginTop: '4%',
    marginBottom: '2%',
  },
});
