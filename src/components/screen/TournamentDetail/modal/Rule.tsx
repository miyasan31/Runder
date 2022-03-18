import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

type Props = {
  // TODO:optionalを外す
  rule?: string;
};

export const Rule: FC<Props> = ({ rule }) => {
  return (
    <View style={style.root}>
      <Text style={style.tournament_rule}>{rule}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    padding: '4%',
  },
  tournament_rule: {
    fontSize: 16,
    lineHeight: 22,
  },
});
