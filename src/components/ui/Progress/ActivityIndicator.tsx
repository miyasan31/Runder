import type { FC } from 'react';
import React, { memo } from 'react';
import { ActivityIndicator as NativeActivityIndicator, StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useTheme } from '~/hooks/useTheme';

type Props = {
  message?: string;
};

export const ActivityIndicator: FC<Props> = memo(({ message }) => {
  const primary = useTheme({}, 'primary');

  return (
    <View style={style.root} bg="bg1">
      <NativeActivityIndicator size="large" color={primary} />
      {message && (
        <Text style={style.message} color="color2">
          {message}
        </Text>
      )}
    </View>
  );
});

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});
