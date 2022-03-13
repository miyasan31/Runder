import type { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';

type Props = {
  title: string;
};

export const HeaderTitle: FC<Props> = ({ title }) => {
  return <Text style={style.title}>{title}</Text>;
};

const style = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});
