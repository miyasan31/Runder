import type { FC } from 'react';
import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { NotFoundScreenProps } from './ScreenProps';

export const NotFound: FC<NotFoundScreenProps> = (props) => {
  const onRootScreenPush = useCallback(() => {
    props.navigation.replace('Main');
  }, [props.navigation]);

  return (
    <View style={styles.root}>
      <Text style={styles.screen_title}>This screen doesn&apos;t exist.</Text>
      <TouchableOpacity onPress={onRootScreenPush} style={styles.link}>
        <Text style={styles.link_text}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  screen_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  link_text: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
