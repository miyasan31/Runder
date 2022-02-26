import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import * as RNProgress from 'react-native-progress';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

export const Progress: FC = memo(() => {
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={defaultStyle.center}>
      <RNProgress.CircleSnail color={primary} size={50} thickness={4} spinDuration={800} />
    </View>
  );
});

const defaultStyle = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
