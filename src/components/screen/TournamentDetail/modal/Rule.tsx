import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { ActivityIndicator } from '~/components/ui/Progress';
import { ExceptionText, Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import type { Tournament } from '~/types/model';

const FROM = 'tournament';
const COLUMN = 'rule';

type Props = {
  id: number;
};

export const Rule: FC<Props> = memo(({ id }) => {
  const filter = useSupabaseFilter((query) => query.select(COLUMN).eq('id', id), []);
  const { loading, error, data } = useSupabaseSelect<Tournament>(FROM, { filter });

  if (loading) return <ActivityIndicator message="大会ルールを取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="ルールが登録されていません。" />;

  return (
    <View style={style.root}>
      <Text style={style.tournament_rule}>{data[0].rule}</Text>
    </View>
  );
});

const style = StyleSheet.create({
  root: {
    padding: '4%',
  },
  tournament_rule: {
    fontSize: 16,
    lineHeight: 22,
  },
});
