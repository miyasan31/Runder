import type { FC, ReactNode } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { CommonTheme } from '~/styles/theme';
import type { SettingGroupStackParamList } from '~/types';

export type SettingListProps = {
  id: string;
  navigate?: keyof SettingGroupStackParamList;
  leftText?: string;
  leftComponent?: ReactNode;
  rightText?: string;
  rightComponent?: ReactNode;
  onPress: () => void;
  isDivider?: true;
  color?: CommonTheme;
};

export const SettingList: FC<SettingListProps> = ({
  navigate: _,
  leftText,
  leftComponent,
  rightText,
  rightComponent,
  onPress,
  isDivider,
  color,
}) => {
  return (
    <>
      <List viewStyle={style.list} onPress={onPress}>
        <View style={style.list_item}>
          {leftComponent}
          <Text style={[style.list_text, leftComponent ? style.text_left : null]} color={color}>
            {leftText}
          </Text>
        </View>

        <View style={style.list_item}>
          <Text style={[style.list_text, rightComponent ? style.text_right : null]} color={color}>
            {rightText}
          </Text>
          {rightComponent}
        </View>
      </List>
      {isDivider ? <View style={style.divider} /> : null}
    </>
  );
};

const style = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '4%',
  },
  list_item: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  list_text: {
    width: 'auto',
    fontWeight: '600',
    fontSize: 16,
  },
  text_left: {
    marginLeft: 10,
  },
  text_right: {
    marginRight: 10,
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: '3%',
  },
});
