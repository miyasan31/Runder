import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';

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
  return (
    <List viewStyle={style.root}>
      <Text style={style.td_rank}>{props.rank === 100 ? 'チャレンジ' : `${props.rank}位`}</Text>

      <Text style={style.td_point}>
        {props.point}
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
