/* eslint-disable react-native/no-inline-styles */
import type { FC } from 'react';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

const data = [
  { rank: 1, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 2, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 3, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 4, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 5, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 100, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
];

type RecordData = typeof data[0];

export const RecordTableBody: FC<RecordData> = ({ rank, record, user: { name, icon: _icon } }) => {
  const borderBottomColor = useThemeColor({}, 'border');

  return (
    <View style={[style.root, { borderBottomColor }, { borderBottomWidth: rank === 100 ? 0 : 1 }]}>
      <View style={style.td_left_box}>
        <Text style={style.td_rank}>{rank}位</Text>
        <Image source={require('assets/develop/lilnasx.png')} style={style.td_user_icon} />
        <Text style={style.td_user_name}>{name}</Text>
      </View>

      <Text style={style.td_record}>{record}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',

    paddingHorizontal: '3%',
    paddingVertical: '3%',
    borderBottomWidth: 1,
  },
  td_left_box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  td_user_icon: {
    height: 35,
    width: 35,
    marginLeft: '10%',
    borderRadius: 999,
  },
  td_rank: {
    width: '30%',

    fontSize: 16,
    fontWeight: '600',
  },
  td_user_name: {
    marginLeft: '10%',

    fontSize: 16,
    fontWeight: '600',
  },
  td_record: {
    flex: 1,

    textAlign: 'right',
    fontWeight: '600',
    fontSize: 16,
  },
});
