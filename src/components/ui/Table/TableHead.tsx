import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

type Props = {
  leftTitle: string;
  rightTitle: string;
};

export const TableHead: FC<Props> = ({ leftTitle, rightTitle }) => {
  return (
    <View style={style.th} bg="bg2">
      <Text style={style.th_rank}>{leftTitle}</Text>
      <Text style={style.th_point}>{rightTitle}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  th: {
    flexDirection: 'row',
    padding: '4%',
    borderRadius: 10,
  },
  th_rank: {
    flex: 1,
    fontWeight: '600',
  },
  th_point: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '600',
  },
});
