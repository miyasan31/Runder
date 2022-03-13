import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { SexAndAgeHierarchySelect } from '~/components/ui/SexAndAgeHierarchySelect';
import { TableHead } from '~/components/ui/Table';
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
    <FlatList
      data={data}
      style={flatListStyle.list}
      keyExtractor={(item, _) => String(item.rank)}
      ListHeaderComponent={() => (
        <>
          <SexAndAgeHierarchySelect outlineStyle={style.sex_and_age_hierarchy_box} />
          <TableHead outlineStyle={style.table_head} leftTitle="順位" rightTitle="記録" />
        </>
      )}
      renderItem={({ item }) => {
        return <RecordTableBody {...item} outlineStyle={style.list} />;
      }}
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
