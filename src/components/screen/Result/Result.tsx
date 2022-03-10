import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ResultTableBody } from '~/components/model/tournament/ResultTableBody';
import { MonthPagination } from '~/components/ui/MonthPagination';
import { TableHead } from '~/components/ui/Table';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';

import type { ResultScreenProps } from './ScreenProps';

const data = [
  {
    id: '1',
    name: 'Winter Distance Challenge',
    distance: 3000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
    rank: 1,
    record: '00:00.00',
    point: 10,
  },
  {
    id: '2',
    name: 'Winter Distance Challenge',
    distance: 1000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
    rank: 2,
    record: '00:00.00',
    point: 100,
  },
  {
    id: '3',
    name: 'Winter Distance Challenge',
    distance: 1000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
    rank: 100,
    record: '00:00.00',
    point: 10000,
  },
  {
    id: '4',
    name: 'Winter Distance Challenge',
    distance: 1000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
    rank: 167,
    record: '00:00.00',
    point: 100,
  },
];

type Tournament = typeof data[0];

export const Result: FC<ResultScreenProps> = (props) => {
  return (
    <>
      <View style={style.box}>
        <MonthPagination />
        <TableHead leftTitle="大会" rightTitle="あなたの結果" />
      </View>

      <FlatList
        data={data}
        style={flatListStyle.list}
        keyExtractor={(item, _) => String(item.id)}
        renderItem={({ item }: { item: Tournament }) => {
          return <ResultTableBody {...item} {...props} />;
        }}
        ListFooterComponent={() => <View style={flatListStyle.bottom_space_large} />}
      />
    </>
  );
};

const style = StyleSheet.create({
  box: {
    paddingHorizontal: '3%',
  },
});
