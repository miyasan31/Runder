import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

const data = [
  { date: '1/2', record: '10:00.0' },
  { date: '1/13', record: '10:00.0' },
  { date: '1/30', record: '10:00.0' },
  { date: '1/21', record: '10:00.0' },
  { date: '1/5', record: '10:00.0' },
  { date: '1/22', record: '10:00.0' },
];

type RecordData = typeof data[0] & {
  isLastChild: boolean;
};

export const MyRecordTableBody: FC<RecordData> = ({ date, record, isLastChild }) => {
  const borderBottomColor = useThemeColor({}, 'border');

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[style.tr, { borderBottomColor }, { borderBottomWidth: isLastChild ? 0 : 1 }]}
    >
      <Text style={style.td_rank}>{date}</Text>

      <Text style={style.td_point}>{record}</Text>
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
