import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

export const Rule: FC = () => {
  return (
    <View style={style.root}>
      <Text style={style.tournament_rule}>
        12月1日(月)6:00から12月31日(金)11:59までの 期間で開催されます。
        チャレンジできる回数は10回です。 期間中に3000mを走ってください。
        タイム順にランキングを集計します。 同タイムの場合は測定日が早い方の記録が優先 されます。
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    padding: '4%',
  },
  tournament_rule: {
    fontSize: 16,
    lineHeight: 22,
  },
});
