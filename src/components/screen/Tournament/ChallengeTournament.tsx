import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { ChallengeCard } from '~/components/model/tournament/ChallengeCard';
import { ActivityIndicator } from '~/components/ui/Progress';
import { ExceptionText } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';
import type { Record, Tournament } from '~/types/model';

import type { TournamentScreenProps } from '.';
import { useChallengeList } from './useChallengeList';

type ChallengeTournamentList = {
  tournament: Tournament;
  count: number;
  record: Record;
};

export const ChallengeTournament: FC<TournamentScreenProps> = (props) => {
  const { loading, error, data } = useChallengeList();

  if (loading) return <ActivityIndicator message="大会一覧を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="チャレンジ中の大会が見つかりませんでした。" />;

  return (
    <FlatList
      data={data}
      // style={flatListStyle.card}
      keyExtractor={(item, _) => String(item.tournament.id)}
      renderItem={({ item }: { item: ChallengeTournamentList }) => {
        return <ChallengeCard {...item} {...props} />;
      }}
      ListFooterComponent={() => <View style={flatListStyle.bottom_space_large} />}
    />
  );
};
