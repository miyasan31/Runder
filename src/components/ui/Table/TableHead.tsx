import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

type Props = {
  leftTitle: string;
  rightTitle: string;
  centerTile?: string;
};

export const TableHead: FC<Props> = memo(({ leftTitle, rightTitle, centerTile }) => {
  return (
    <View style={style.root} bg="bg2">
      <Text style={style.th_left}>{leftTitle}</Text>
      {centerTile ? <Text style={style.th_center}>{centerTile}</Text> : null}
      <Text style={style.th_right}>{rightTitle}</Text>
    </View>
  );
});

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    borderRadius: 10,
  },
  th_left: {
    flex: 3,
    fontSize: 12,
    fontWeight: '600',
  },
  th_center: {
    flex: 1.5,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '600',
  },
  th_right: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '600',
  },
});
