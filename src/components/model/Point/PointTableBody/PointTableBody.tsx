import type { FC } from 'react';
import React from 'react';
import type { StyleProp } from 'react-native';
import { StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import type { OutlineStyle } from '~/types/style';

const data = [
  { rank: 1, point: 500 },
  { rank: 2, point: 400 },
  { rank: 3, point: 300 },
  { rank: 4, point: 200 },
  { rank: 5, point: 100 },
  { rank: 100, point: 10 },
];

type PointData = typeof data[0] & {
  outlineStyle?: StyleProp<OutlineStyle>;
};

export const PointTableBody: FC<PointData> = ({ outlineStyle, rank, point }) => {
  return (
    <List outlineStyle={outlineStyle} viewStyle={style.root}>
      <Text style={style.td_rank}>{rank === 100 ? 'チャレンジ' : `${rank}位`}</Text>

      <Text style={style.td_point}>
        {point}
        <Text>ポイント</Text>
      </Text>
    </List>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
  },
  td_rank: {
    flex: 1,
  },
  td_point: {
    flex: 1,
    textAlign: 'right',
  },
});
