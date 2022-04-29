import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { TournamentCard } from '~/components/model/tournament/TournamentCard';
import { ActivityIndicator } from '~/components/ui/Progress';
import { ExceptionText } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { flatListStyle } from '~/styles';
import type { Tournament } from '~/types/model';

import type { TournamentScreenProps } from '.';

export const VirtualTournament: FC<TournamentScreenProps> = (props) => {
  const filter = useSupabaseFilter(
    (query) =>
      query
        .select('id, name, distance, start, end, term, tournament_design(image_semi)')
        .order('start'),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<Tournament>('tournament', {
    filter,
  });

  if (loading) return <ActivityIndicator message="大会一覧を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="開催中の大会が見つかりませんでした。" />;

  return (
    <FlatList
      data={data}
      // style={flatListStyle.card}
      keyExtractor={(item, _) => String(item.id)}
      renderItem={({ item }: { item: Tournament }) => {
        return <TournamentCard {...item} {...props} />;
      }}
      ListFooterComponent={() => <View style={flatListStyle.bottom_space_large} />}
    />
  );
};
