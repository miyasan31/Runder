import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { Button } from '~/components/ui/Button';
import { View } from '~/components/ui/View';
import type { StackScreenProps as Props } from '~/types';

import { useRunning } from './useRunning';

export type RunningScreenProps = Props<'RunningScreen'>;

export const Running: FC<RunningScreenProps> = ({ navigation }) => {
  const { isRunning, coordinates, onToggleRunningStatus, coordinateResult, strokeResult, onSave } =
    useRunning(navigation);

  if (coordinates.length === 0) return null;

  return (
    <View style={styles.root}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline coordinates={coordinateResult} strokeColors={strokeResult} strokeWidth={6} />
      </MapView>

      <Button
        label={isRunning ? 'STOP' : 'START'}
        bg="primary"
        outlineStyle={styles.button}
        onPress={onToggleRunningStatus}
      />
      <Button label="SAVE" bg="accent" outlineStyle={styles.button_1} onPress={onSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 100,
    width: '80%',
    marginHorizontal: '10%',
  },
  button_1: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 20,
    width: '80%',
    marginHorizontal: '10%',
  },
});
