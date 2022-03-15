import type { FC } from 'react';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { MyRecordTableBody } from '~/components/model/record/MyRecordTableBody';
import { TableHead } from '~/components/ui/Table';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { flatListStyle } from '~/styles';
import type { Location } from '~/types/fetcher';

import type { ChallengeDetailScreenProps } from '.';

const SELECT_COLUMN = 'location';
const history_data = [
  { date: '1/2', record: '10:00.0' },
  { date: '1/13', record: '10:00.0' },
  { date: '1/30', record: '10:00.0' },
  { date: '1/21', record: '10:00.0' },
  { date: '1/5', record: '10:00.0' },
  { date: '1/22', record: '10:00.0' },
];

type LocationDetail = Pick<Location, 'location'>;

export const CombatHistory: FC<ChallengeDetailScreenProps> = () => {
  const [id] = useState(1);
  const filter = useSupabaseFilter((query) => query.select(SELECT_COLUMN).eq('id', id), []);
  const { loading, error, data } = useSupabaseSelect<LocationDetail>('location', { filter });

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
    <>
      <Text style={style.best_time_title} color="color2">
        あなたのベストタイム
      </Text>
      <Text style={style.best_time}>14:00.00</Text>

      <MapView
        style={style.map}
        initialRegion={{
          latitude: data[0].location[0].latitude,
          longitude: data[0].location[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline coordinates={coordinateResult} strokeColors={strokeResult} strokeWidth={6} />
      </MapView>

      <View style={style.th_box}>
        <TableHead leftTitle="日付" rightTitle="タイム" />
      </View>

      <FlatList
        data={history_data}
        style={flatListStyle.list}
        keyExtractor={(item, _) => String(item.date)}
        renderItem={({ item }) => {
          return <MyRecordTableBody {...item} />;
        }}
        ListFooterComponent={() => <View style={flatListStyle.bottom_space_medium} />}
      />
    </>
  );
};

const style = StyleSheet.create({
  best_time_title: {
    paddingTop: '4%',
    paddingHorizontal: '4%',
    fontSize: 16,
  },
  best_time: {
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    fontSize: 40,
  },
  map: {
    width: Dimensions.get('window').width,
    height: '30%',
  },
  th_box: {
    padding: '4%',
    paddingBottom: '1%',
  },
});
