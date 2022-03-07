import 'react-native-url-polyfill/auto';

import * as Location from 'expo-location';
import { useCallback, useEffect, useMemo, useState } from 'react';

import type { LocationResult } from '~/types/fetcher';
import { supabaseClient } from '~/utils/supabase';

// 位置情報取得許可を要求
const requestForegroundPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  console.info(status);
};

export const useRunning = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [coordinates, setCoordinates] = useState<LocationResult[]>([]);

  const onSetInitialPosition = async () => {
    const _location = await Location.getCurrentPositionAsync({});
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

  const onToggleRunningStatus = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const onRegionChange = async () => {
    const _location = await Location.getCurrentPositionAsync({});
    setCoordinates((prev) => {
      return [
        ...prev,
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
      ];
    });
  };

  const onSave = useCallback(async () => {
    await supabaseClient.from('location').insert([{ location: coordinates }]);
  }, [coordinates]);

  useEffect(() => {
    // 位置情報取得許可を要求
    requestForegroundPermission();
    // 初期値を設定
    onSetInitialPosition();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) onRegionChange();
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

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

  return {
    isRunning,
    onToggleRunningStatus,
    coordinateResult,
    strokeResult,
    coordinates,
    onSave,
  };
};
