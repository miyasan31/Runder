import type { FC } from 'react';
import React, { memo } from 'react';
import type { StyleProp } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { OutlineStyle } from '~/types/style';

type Props = {
  leftTitle: string;
  rightTitle: string;
  centerTile?: string;
  outlineStyle?: StyleProp<OutlineStyle>;
};

export const TableHead: FC<Props> = memo(({ leftTitle, rightTitle, centerTile, outlineStyle }) => {
  return (
    <View style={[defaultStyle.root, outlineStyle]} bg="bg2">
      <Text style={defaultStyle.th_left}>{leftTitle}</Text>
      {centerTile ? <Text style={defaultStyle.th_center}>{centerTile}</Text> : null}
      <Text style={defaultStyle.th_right}>{rightTitle}</Text>
    </View>
  );
});

const defaultStyle = StyleSheet.create({
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
