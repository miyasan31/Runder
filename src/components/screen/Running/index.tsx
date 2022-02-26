import 'react-native-url-polyfill/auto';

import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import type { FC } from 'react';
import React, {
  // useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

// import { Button } from "~/components/ui/Button";
import { View } from '~/components/ui/View';
import type { DevRunningScreenProps } from '~/types';
import type { LocationResult } from '~/types/fetcher';
// import { supabaseClient } from "~/utils/supabaseClient";

// 位置情報取得許可を要求
const requestForegroundPermission = async () => {
  const { status } = await requestForegroundPermissionsAsync();
  console.info(status);
};

export type Props = DevRunningScreenProps<'RunningScreen'>;

export const Running: FC<Props> = () => {
  // const [isRunning, setIsRunning] = useState(false);
  const [coordinates, setCoordinates] = useState<LocationResult[]>([]);

  // const onToggleRunningStatus = useCallback(() => {
  //   setIsRunning((prev) => !prev);
  // }, []);

  // const onRegionChange = async () => {
  //   const _location = await getCurrentPositionAsync({});
  //   setCoordinates((prev) => {
  //     return [
  //       ...prev,
  //       {
  //         accuracy: _location.coords.accuracy,
  //         altitude: _location.coords.altitude,
  //         altitudeAccuracy: _location.coords.altitudeAccuracy,
  //         heading: _location.coords.heading,
  //         latitude: _location.coords.latitude,
  //         longitude: _location.coords.longitude,
  //         speed: _location.coords.speed,
  //         timestamp: _location.timestamp,
  //         color: "#ff0000",
  //       },
  //     ];
  //   });
  // };

  const onSetInitialPosition = async () => {
    const _location = await getCurrentPositionAsync({});
    setCoordinates([
      {
        accuracy: _location.coords.accuracy,
        altitude: _location.coords.altitude,
        altitudeAccuracy: _location.coords.altitudeAccuracy,
        heading: _location.coords.heading,
        latitude: _location.coords.latitude,
        longitude: _location.coords.longitude,
        speed: _location.coords.speed,
        timestamp: _location.timestamp,
        color: '#ff0000',
      },
    ]);
  };

  // const onSave = useCallback(async () => {
  //   await supabaseClient.from("location").insert([{ location: coordinates }]);
  // }, [coordinates]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isRunning) onRegionChange();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [isRunning]);

  useEffect(() => {
    // 位置情報取得許可を要求
    requestForegroundPermission();
    // 初期値を設定
    onSetInitialPosition();
  }, []);

  // coordinates から座標のみ取得
  const coordinateResult = useMemo(() => {
    return coordinates.map((coordinate) => {
      return {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      };
    });
  }, [coordinates]);

  // coordinates からカラーコードのみ取得
  const strokeResult = useMemo(() => {
    return coordinates.map((coordinate) => coordinate.color);
  }, [coordinates]);

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
        {/* <Button
          label={isRunning ? "STOP" : "START"}
          lightBg={isRunning ? "#ffff00" : ""}
          lightColor={isRunning ? "#000000" : ""}
          viewStyle={styles.button}
          onPress={onToggleRunningStatus}
        />
        <Button label="SAVE" lightBg="#f00" viewStyle={styles.button1} onPress={onSave} /> */}
      </MapView>
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
  button1: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 20,
    width: '80%',
    marginHorizontal: '10%',
  },
});
