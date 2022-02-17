import type { VFC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

const data = [
  { rank: 1, point: 500 },
  { rank: 2, point: 400 },
  { rank: 3, point: 300 },
  { rank: 4, point: 200 },
  { rank: 5, point: 100 },
  { rank: 100, point: 10 },
];

type PointData = typeof data[0];

export const PointTableBody: VFC<PointData> = (props) => {
  const borderBottomColor = useThemeColor({}, 'border');

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[style.tr, { borderBottomColor }, { borderBottomWidth: props.rank === 100 ? 0 : 1 }]}
    >
      <Text style={style.tdRank}>{props.rank === 100 ? 'チャレンジ' : `${props.rank}位`}</Text>
      <Text style={style.tdPoint}>
        {props.point}
        <Text style={style.tdPoint}>ポイント</Text>
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  tr: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    borderBottomWidth: 1,
  },
  tdRank: {
    flex: 1,

    fontWeight: '600',
    fontSize: 16,
  },
  tdPoint: {
    flex: 1,

    textAlign: 'right',
    fontWeight: '600',
    fontSize: 16,
  },
});
