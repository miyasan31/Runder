import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { ChallengeCard } from '~/components/model/tournament/ChallengeCard';
import { flatListStyle } from '~/styles';

import type { TournamentScreenProps } from './ScreenProps';

const data = [
  {
    id: '1',
    name: 'Winter Distance Challenge',
    distance: 3000,
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
  {
    id: '2',
    name: 'Winter Distance Challenge',
    distance: 1000,
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
  {
    id: '3',
    name: 'Winter Distance Challenge',
    distance: 1000,
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
  {
    id: '4',
    name: 'Winter Distance Challenge',
    distance: 1000,
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
];

type Tournament = typeof data[0];

export const ChallengeTournament: FC<TournamentScreenProps> = (props) => {
  return (
    <FlatList
      data={data}
      style={flatListStyle.card}
      keyExtractor={(item, _) => String(item.id)}
      renderItem={({ item }: { item: Tournament }) => {
        return <ChallengeCard {...item} {...props} />;
      }}
    />
  );
};
