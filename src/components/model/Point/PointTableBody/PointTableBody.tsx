import type { FC } from 'react';
import React from 'react';
import type { StyleProp } from 'react-native';
import { StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import type { PointTable } from '~/types/model';
import type { OutlineStyle } from '~/types/style';

type SelectColumn = 'id' | 'rank' | 'later_point';

type PointData = Pick<PointTable, SelectColumn> & {
  outlineStyle?: StyleProp<OutlineStyle>;
};

export const PointTableBody: FC<PointData> = ({ outlineStyle, rank, later_point }) => {
  return (
    <List outlineStyle={outlineStyle} viewStyle={style.root}>
      <Text style={style.td_rank}>{rank === 1000 ? 'チャレンジ' : `${rank}位`}</Text>
      <Text style={style.td_point}>
        {later_point}
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
