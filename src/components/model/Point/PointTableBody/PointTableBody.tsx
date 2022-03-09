/* eslint-disable react-native/no-inline-styles */
import type { FC } from 'react';
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

export const PointTableBody: FC<PointData> = (props) => {
  const borderBottomColor = useThemeColor({}, 'border');

  return (
    <View
      style={[style.root, { borderBottomColor }, { borderBottomWidth: props.rank === 100 ? 0 : 1 }]}
    >
      <Text style={style.td_rank}>{props.rank === 100 ? 'チャレンジ' : `${props.rank}位`}</Text>

      <Text style={style.td_point}>
        {props.point}
        <Text>ポイント</Text>
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    borderBottomWidth: 1,
  },
  td_rank: {
    flex: 1,
    fontWeight: '600',
    fontSize: 16,
  },
  td_point: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '600',
    fontSize: 16,
  },
});
