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

const FROM = 'point_table';
const COLUMN = 'id, rank, point';
const EQUAL = 'tournament_id';

type Props = {
  id: number;
};

export const Point: FC<Props> = memo(({ id }) => {
  const filter = useSupabaseFilter((query) => query.select(COLUMN).eq(EQUAL, id), []);
  const { loading, error, data } = useSupabaseSelect<PointTable>(FROM, { filter });

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
