import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';

import { ResultTableBody } from '~/components/model/tournament/ResultTableBody';
import { MonthPagination } from '~/components/ui/MonthPagination';
import { ActivityIndicator } from '~/components/ui/Progress';
import { TableHead } from '~/components/ui/Table';
import { ExceptionText } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { user } from '~/stores/user';
import { flatListStyle } from '~/styles';
import type { ResultScreenProps as Props } from '~/types';
import type { Record } from '~/types/model';

export type ResultScreenProps = Props<'ResultScreen'>;

export const Result: FC<ResultScreenProps> = (props) => {
  const userInfo = useRecoilValue(user);

  const filter = useSupabaseFilter(
    (query) =>
      query
        .select(
          'id, record, tournament(id, name, distance, start, end, term,  tournament_design(image_semi))',
        )
        .eq('user_id', userInfo.id)
        .eq('isBest', true)
        .order('created_at'),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<Record>('record', { filter });

  if (loading) return <ActivityIndicator message="ポイント情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="記録がまだありません。" />;

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
        renderItem={({ item }) => {
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
