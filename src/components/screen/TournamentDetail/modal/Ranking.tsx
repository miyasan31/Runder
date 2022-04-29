import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { ActivityIndicator } from '~/components/ui/Progress';
import { SexAndAgeHierarchySelect } from '~/components/ui/SexAndAgeHierarchySelect';
import { TableHead } from '~/components/ui/Table';
import { ExceptionText } from '~/components/ui/Text';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { flatListStyle } from '~/styles';
import type { Record } from '~/types/model';

const FROM = 'record';
const COLUMN = 'id, record, user(name, avatar)';
const EQUAL_1 = 'tournament_id';
const EQUAL_2 = 'isBest';
const ORDER = 'record';

type Props = {
  id: number;
};

export const Ranking: FC<Props> = ({ id }) => {
  // TODO:男女年齢フィルターを実装する
  const filter = useSupabaseFilter(
    (query) => query.select(COLUMN).eq(EQUAL_1, id).eq(EQUAL_2, true).order(ORDER),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<Record>(FROM, { filter });

  if (loading) return <ActivityIndicator message="ポイント情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="記録がまだありません。" />;

  return (
    <FlatList
      data={data}
      style={flatListStyle.list}
      keyExtractor={(item, _) => String(item.id)}
      ListHeaderComponent={() => (
        <>
          <SexAndAgeHierarchySelect outlineStyle={style.sex_and_age_hierarchy_box} />
          <TableHead outlineStyle={style.table_head} leftTitle="順位" rightTitle="記録" />
        </>
      )}
      renderItem={({ item, index }) => {
        return <RecordTableBody {...item} ranking={index + 1} outlineStyle={style.list} />;
      }}
    />
  );
};

const style = StyleSheet.create({
  sex_and_age_hierarchy_box: {
    paddingTop: '4%',
  },
  list: {
    paddingHorizontal: '2%',
  },
  table_head: {
    marginTop: '4%',
    marginBottom: '2%',
  },
});
