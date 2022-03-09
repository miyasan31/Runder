import type { FC } from 'react';
import React, { memo } from 'react';
import { ActivityIndicator as NativeActivityIndicator, StyleSheet } from 'react-native';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

export const ActivityIndicator: FC = memo(() => {
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={style.root} bg="bg1">
      <NativeActivityIndicator size="large" color={primary} />
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
