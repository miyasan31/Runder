import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { HeaderLeftButton } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

type Props = {
  title: string;
  onPress?: () => void;
};

export const Header: FC<Props> = ({ title, onPress }) => {
  return (
    <View style={style.header}>
      <HeaderLeftButton style={style.avatar} type="close" onPress={onPress} />
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
  },
  avatar: {
    position: 'absolute',
    zIndex: 100,
    width: 'auto',
    top: 6,
    left: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
