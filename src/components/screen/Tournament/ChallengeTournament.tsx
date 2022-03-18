import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { ChallengeCard } from '~/components/model/tournament/ChallengeCard';
import { ActivityIndicator } from '~/components/ui/Progress';
import { ExceptionText } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { flatListStyle } from '~/styles';
import type { Tournament } from '~/types/model';

import type { TournamentScreenProps } from '.';

const FROM = 'tournament';
const COLUMN = 'id, name, distance, start, end, image, term';
const ORDER = 'start';

export const ChallengeTournament: FC<TournamentScreenProps> = (props) => {
  // TODO:ユーザーIDに紐づく、チャレンジ履歴があるレコードを取得
  const filter = useSupabaseFilter((query) => query.select(COLUMN).order(ORDER), []);
  const { loading, error, data } = useSupabaseSelect<Tournament>(FROM, {
    filter,
  });

  if (loading) return <ActivityIndicator message="大会一覧を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="チャレンジ中の大会が見つかりませんでした。" />;

  return (
    <FlatList
      data={data}
      // style={flatListStyle.card}
      keyExtractor={(item, _) => String(item.id)}
      renderItem={({ item }: { item: Tournament }) => {
        return <ChallengeCard {...item} {...props} />;
      }}
      ListFooterComponent={() => <View style={flatListStyle.bottom_space_large} />}
    />
  );
};
