import { format } from 'date-fns';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import { formatRecord } from '~/functions/formatRecord';
import type { Record } from '~/types/model';

type Props = Record & {
  index: number;
  activeIndex: number;
  onSelectRecord: (id: number) => void;
};

export const MyRecordTableBody: FC<Props> = ({
  index,
  activeIndex,
  record,
  created_at,
  onSelectRecord,
}) => {
  const date = format(new Date(created_at), 'M/d');
  const recordResult = formatRecord(record);

  return (
    <List
      viewStyle={style.root}
      onPress={() => onSelectRecord(index)}
      bg={index === activeIndex ? 'primaryA' : 'bg0'}
    >
      <Text style={style.td_date}>{date}</Text>

      <Text style={style.td_record}>{recordResult}</Text>
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
