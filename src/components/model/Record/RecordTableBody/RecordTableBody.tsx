import type { VFC } from 'react';
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

export const RecordTableBody: VFC<RecordData> = ({ rank, record, user: { name, icon: _icon } }) => {
  const borderBottomColor = useThemeColor({}, 'border');

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[style.tr, { borderBottomColor }, { borderBottomWidth: rank === 100 ? 0 : 1 }]}
    >
      <View style={style.tdLeft}>
        <Text style={style.tdRank}>{rank}位</Text>
        <Image source={require('assets/develop/lilnasx.png')} style={style.userIcon} />
        <Text style={style.tdName}>{name}</Text>
      </View>

      <Text style={style.tdPoint}>{record}</Text>
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
  //
  tdLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    height: 35,
    width: 35,
    marginLeft: '10%',
    borderRadius: 999,
  },
  tdRank: {
    width: '30%',

    fontSize: 16,
    fontWeight: '600',
  },
  tdName: {
    marginLeft: '10%',

    fontSize: 16,
    fontWeight: '600',
  },
  tdPoint: {
    flex: 1,

    textAlign: 'right',
    fontWeight: '600',
    fontSize: 16,
  },
});
