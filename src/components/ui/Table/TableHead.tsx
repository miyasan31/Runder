import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

type Props = {
  leftTitle: string;
  rightTitle: string;
};

export const TableHead: FC<Props> = memo(({ leftTitle, rightTitle }) => {
  return (
    <View style={style.root} bg="bg2">
      <Text style={style.th_left}>{leftTitle}</Text>
      <Text style={style.th_right}>{rightTitle}</Text>
    </View>
  );
});

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: '4%',
    borderRadius: 10,
  },
  th_left: {
    flex: 1,
    fontWeight: '600',
  },
  th_right: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '600',
  },
});
