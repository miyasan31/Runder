import { StatusBar } from 'expo-status-bar';
import type { FC } from 'react';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { StackScreenProps } from '~/types';

export type Props = StackScreenProps<'Modal'>;

export const Modal: FC<Props> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.screen_title}>Modal 1</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
