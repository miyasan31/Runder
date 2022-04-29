import type { FC } from 'react';
import React from 'react';
import { FlatList } from 'react-native';

import { NewsList } from '~/components/model/news/NewsList';
import { ActivityIndicator } from '~/components/ui/Progress';
import { ExceptionText } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { flatListStyle } from '~/styles';
import type { Info } from '~/types/model';

import type { RelationshipScreenProps } from '.';

export const News: FC<RelationshipScreenProps> = (props) => {
  const filter = useSupabaseFilter(
    (query) => query.select('id, title, created_at').order('created_at'),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<Info>('info', {
    filter,
  });

  if (loading) return <ActivityIndicator message="お知らせ情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="お知らせはありません。" />;

  return (
    <FlatList
      data={data}
      style={flatListStyle.list}
      ItemSeparatorComponent={() => <View style={flatListStyle.separator} />}
      renderItem={({ item }) => <NewsList {...props} {...item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
