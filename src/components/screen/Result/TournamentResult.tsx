import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { ResultList } from '~/components/model/tournament/ResultList';
import { MonthPagination } from '~/components/ui/MonthPagination';
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
  },
  {
    id: '2',
    name: 'Winter Distance Challenge',
    distance: 1000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
  {
    id: '3',
    name: 'Winter Distance Challenge',
    distance: 1000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
  {
    id: '4',
    name: 'Winter Distance Challenge',
    distance: 1000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
];

type Tournament = typeof data[0];

export const TournamentResult: FC<ResultScreenProps> = (props) => {
  return (
    <>
      <MonthPagination />

      <FlatList
        data={data}
        style={flatListStyle.inner_list}
        keyExtractor={(item, _) => String(item.id)}
        renderItem={({ item }: { item: Tournament }) => {
          return <ResultList {...item} {...props} />;
        }}
      />
    </>
  );
};
