import type { FC } from 'react';
import React, { memo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { PointTableBody } from '~/components/model/point/PointTableBody';
import { ActivityIndicator } from '~/components/ui/Progress';
import { TableHead } from '~/components/ui/Table';
import { ExceptionText } from '~/components/ui/Text';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { flatListStyle } from '~/styles';
import type { PointTable } from '~/types/model';

type Props = {
  id: number;
};

export const Point: FC<Props> = memo(({ id }) => {
  const filter = useSupabaseFilter(
    (query) => query.select('id, rank, later_point').eq('tournament_id', id).order('rank'),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<PointTable>('point_table', { filter });

  if (loading) return <ActivityIndicator message="ポイント情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="ポイント情報が登録されていません。" />;

  return (
    <FlatList
      data={data}
      style={flatListStyle.list}
      keyExtractor={(item, _) => String(item.rank)}
      ListHeaderComponent={() => (
        <TableHead outlineStyle={style.table_head} leftTitle="順位" rightTitle="獲得ポイント" />
      )}
      renderItem={({ item }) => {
        return <PointTableBody {...item} />;
      }}
    />
  );
});

const style = StyleSheet.create({
  table_head: {
    marginTop: '4%',
    marginBottom: '2%',
  },
});
