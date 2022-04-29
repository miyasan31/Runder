import type { FC } from 'react';
import React from 'react';
import type { StyleProp } from 'react-native';
import { Image, StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { formatRecord } from '~/functions/formatRecord';
import type { OutlineStyle } from '~/types/style';

type RecordData = {
  ranking: number;
  record?: number;
  point?: number;
  user: {
    id: string;
    name: string;
    avatar: string;
  };

  outlineStyle?: StyleProp<OutlineStyle>;
};

export const RecordTableBody: FC<RecordData> = ({
  ranking,
  record,
  point,
  user: { name, avatar },
  outlineStyle,
}) => {
  const recordResult = formatRecord(record);

  return (
    <List outlineStyle={outlineStyle} viewStyle={[defaultStyle.root]}>
      <View style={defaultStyle.td_left}>
        <Text style={defaultStyle.td_rank}>{ranking}位</Text>
        <Image
          source={avatar ? { uri: avatar } : require('assets/develop/lilnasx.png')}
          style={defaultStyle.td_user_icon}
        />
        <Text style={defaultStyle.td_user_name} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
      </View>

      {point ? (
        <>
          <Text style={defaultStyle.td_center}>{recordResult}</Text>
          <Text style={defaultStyle.td_right}>{point}</Text>
        </>
      ) : (
        <Text style={defaultStyle.td_right}>{recordResult}</Text>
      )}
    </List>
  );
};

const defaultStyle = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
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
    marginRight: '4%',
    borderRadius: 999,
  },
  td_user_name: {
    flex: 1,
    marginRight: 20,
  },
  td_center: {
    flex: 1.5,

    textAlign: 'left',
  },
  td_right: {
    flex: 1,

    textAlign: 'right',
  },
});
