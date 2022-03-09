import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import * as RNProgress from 'react-native-progress';

import { View } from '~/components/ui/View';
import { useTheme } from '~/hooks/useTheme';

export const Progress: FC = memo(() => {
  const primary = useTheme({}, 'primary');

  return (
    <View style={style.root}>
      <RNProgress.CircleSnail color={primary} size={50} thickness={4} spinDuration={800} />
    </View>
  );
});

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
