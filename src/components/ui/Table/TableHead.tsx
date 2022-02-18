import type { VFC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

type Props = {
  leftTitle: string;
  rightTitle: string;
};

export const TableHead: VFC<Props> = ({ leftTitle, rightTitle }) => {
  return (
    <View style={style.th} bgTheme="bg2">
      <Text style={style.thRank}>{leftTitle}</Text>
      <Text style={style.thPoint}>{rightTitle}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  th: {
    flexDirection: 'row',
    padding: '4%',
    borderRadius: 10,
  },
  thRank: {
    flex: 1,
    fontWeight: '600',
  },
  thPoint: {
    flex: 1,
    textAlign: 'right',
    fontWeight: '600',
  },
});
