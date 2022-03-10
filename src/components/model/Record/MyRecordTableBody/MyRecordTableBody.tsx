import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';

const data = [
  { date: '1/2', record: '10:00.0' },
  { date: '1/13', record: '10:00.0' },
  { date: '1/30', record: '10:00.0' },
  { date: '1/21', record: '10:00.0' },
  { date: '1/5', record: '10:00.0' },
  { date: '1/22', record: '10:00.0' },
];

type RecordData = typeof data[0];

export const MyRecordTableBody: FC<RecordData> = ({ date, record }) => {
  return (
    <List viewStyle={style.root}>
      <Text style={style.td_date}>{date}</Text>

      <Text style={style.td_record}>{record}</Text>
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
  td_date: {
    flex: 1,
  },
  td_record: {
    flex: 1,
    textAlign: 'right',
  },
});
