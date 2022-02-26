import type { FC } from 'react';
import React, { memo } from 'react';
import { ActivityIndicator as NativeActivityIndicator, StyleSheet } from 'react-native';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

export const ActivityIndicator: FC = memo(() => {
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={defaultStyle.center} bg="bg1">
      <NativeActivityIndicator size="large" color={primary} />
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
