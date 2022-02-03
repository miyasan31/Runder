import type { VFC } from "react";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Text } from "src/components/custom";
import { Layout } from "src/components/layout";
import { useSupabaseFilter, useSupabaseSelect } from "src/hooks";
import type { DevListScreenProps } from "src/types";
import type { Location } from "src/types/fetcher";

const SELECT_COLUMN = "location";
type LocationDetail = Pick<Location, "location">;

export const RunningDetailScreen: VFC<DevListScreenProps<"RunningDetail">> = (props) => {
  const { id } = props.route.params;
  const filter = useSupabaseFilter((query) => query.select(SELECT_COLUMN).eq("id", id), []);
  const { loading, error, data } = useSupabaseSelect<LocationDetail>("location", { filter });

  if (loading) return <Text>読み込み中...</Text>;
  if (error) return <Text>エラー</Text>;
  if (!data) return <Text>データなし</Text>;

  // coordinates から座標のみ取得
  const coordinateResult = data[0].location.map((coordinate) => {
    return { latitude: coordinate.latitude, longitude: coordinate.longitude };
  });
  // coordinates からカラーコードのみ取得
  const strokeResult = data[0].location.map((coordinate) => coordinate.color);

  return (
    <Layout style={styles.root}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: data[0].location[0].latitude,
          longitude: data[0].location[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline coordinates={coordinateResult} strokeColors={strokeResult} strokeWidth={6} />
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
});
