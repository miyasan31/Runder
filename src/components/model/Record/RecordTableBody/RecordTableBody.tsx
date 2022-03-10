import type { FC } from 'react';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

type RecordData = {
  rank: number;
  record: string;
  point?: number;
  user: {
    name: string;
    icon: string;
  };
};

export const RecordTableBody: FC<RecordData> = ({
  rank,
  record,
  point,
  user: { name, icon: _icon },
}) => {
  return (
    <List viewStyle={style.root}>
      <View style={style.td_left}>
        <Text style={style.td_rank}>{rank}位</Text>
        <Image source={require('assets/develop/lilnasx.png')} style={style.td_user_icon} />
        <Text style={style.td_user_name}>{name}</Text>
      </View>

      {point ? (
        <>
          <Text style={style.td_center}>{record}</Text>
          <Text style={style.td_right}>{point}</Text>
        </>
      ) : (
        <Text style={style.td_right}>{record}</Text>
      )}
    </List>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
  },

  td_left: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  td_rank: {
    width: 45,
  },
  td_user_icon: {
    height: 32,
    width: 32,
    marginHorizontal: 5,
    borderRadius: 999,
  },
  td_user_name: {},
  td_center: {
    flex: 1.5,

    textAlign: 'left',
  },
  td_right: {
    flex: 1,

    textAlign: 'right',
  },
});
