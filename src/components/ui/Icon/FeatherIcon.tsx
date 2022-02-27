import { Feather } from '@expo/vector-icons';
import type { ComponentProps, FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

const BOTTOM_ICON = 25;

type Props = {
  name: ComponentProps<typeof Feather>['name'];
  color: string;
};

export const FeatherIcon: FC<Props> = memo((props) => {
  return <Feather style={defaultStyle.icon} size={BOTTOM_ICON} {...props} />;
});

const defaultStyle = StyleSheet.create({
  icon: {
    marginTop: 4,
  },
});
