import {
  // getCurrentPositionAsync
  requestForegroundPermissionsAsync,
} from "expo-location";
import type { VFC } from "react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { ColorButton } from "src/components/custom";
import { Layout } from "src/components/layout";
import type { TabOneScreenProps } from "types";

const INITIAL_REGION = [
  { latitude: 35.1111, longitude: 136.00001, color: "#ff0000" },
  { latitude: 35.1121, longitude: 136.0001, color: "#ff7700" },
  { latitude: 35.1133, longitude: 136.00201, color: "#ffe100" },
  { latitude: 35.1143, longitude: 136.00204, color: "#55ff00" },
  { latitude: 35.1153, longitude: 136.0001, color: "#00ff91" },
  { latitude: 35.1163, longitude: 136.0003, color: "#00c3ff" },
  { latitude: 35.1163, longitude: 136.0033, color: "#0048ff" },
  { latitude: 35.1111, longitude: 136.00001, color: "#6a00ff" },
];

// 位置情報取得許可を要求
const requestForegroundPermission = async () => {
  const { status } = await requestForegroundPermissionsAsync();
  console.info(status);
};

export const TabOneScreen: VFC<TabOneScreenProps<"TabOneScreen">> = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [coordinates, setCoordinates] = useState([
    {
      latitude: 35.1111,
      longitude: 136.00001,
      color: "#ff0000",
    },
  ]);

  const onToggleRunningStatus = useCallback(() => {
    setIsRunning((prevState) => !prevState);
  }, []);

  const onRegionChange = async () => {
    // const _location = await getCurrentPositionAsync({});
    // console.info(_location);

    setCoordinates((prevState) => {
      return [
        ...prevState,
        {
          latitude: prevState[prevState.length - 1].latitude + 0.0000004,
          longitude: prevState[prevState.length - 1].longitude + 0.000004,
          color: "#ff0000",
        },
      ];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) onRegionChange();
    }, 100);
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    // 位置情報取得許可を要求
    requestForegroundPermission();
    // 初期値を設定
    setCoordinates(INITIAL_REGION);
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

  return (
    <Layout style={styles.root}>
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
        <ColorButton
          title={isRunning ? "STOP" : "START"}
          lightBgColor={isRunning ? "#ffff00" : ""}
          lightTextColor={isRunning ? "#000000" : ""}
          bgStyle={styles.button}
          onPress={onToggleRunningStatus}
        />
      </MapView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  button: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 20,
    width: "80%",
    marginHorizontal: "10%",
  },
});

// type LocationResult = {
//   coords: {
//     accuracy: number;
//     altitude: number;
//     altitudeAccuracy: number;
//     heading: number;
//     latitude: number;
//     longitude: number;
//     speed: number;
//   };
//   timestamp: number;
// };
