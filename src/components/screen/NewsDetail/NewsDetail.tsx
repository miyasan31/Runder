import { format } from 'date-fns';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Image } from '~/components/ui/Image';
import { ActivityIndicator } from '~/components/ui/Progress';
import { ExceptionText, Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import type { RelationshipScreenProps } from '~/types';
import type { Info } from '~/types/model';

export type NewsDetailScreenProps = RelationshipScreenProps<'NewsDetailScreen'>;

const FROM = 'info';
const COLUMN = '*';
const EQUAL = 'id';

export const NewsDetail: FC<NewsDetailScreenProps> = (props) => {
  const { news_id } = props.route.params;
  const filter = useSupabaseFilter((query) => query.select(COLUMN).eq(EQUAL, news_id), []);
  const { loading, error, data } = useSupabaseSelect<Info>(FROM, { filter });

  if (loading) return <ActivityIndicator message="大会情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="大会情報が見つかりませんでした。" />;

  const startDate = format(new Date(data[0].created_at), 'yyyy年M年d日');

  return (
    <View>
      <Image source={{ uri: data[0].image }} style={style.info_image} />
      <Text>{data[0].title}</Text>
      <Text>{data[0].contents}</Text>
      <Text>{startDate}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  info_image: {
    width: '100%',
    height: 400,
  },
});
