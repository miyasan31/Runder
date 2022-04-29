import type { FC } from 'react';
import React, { memo, useCallback, useState } from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { useRecoilValue } from 'recoil';

import { MyRecordTableBody } from '~/components/model/record/MyRecordTableBody';
import { ActivityIndicator } from '~/components/ui/Progress';
import { TableHead } from '~/components/ui/Table';
import { ExceptionText, Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { formatRecord } from '~/functions/formatRecord';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { user } from '~/stores/user';
import { flatListStyle } from '~/styles';
import type { Record } from '~/types/model';

import type { ChallengeDetailScreenProps } from '.';

export const CombatHistory: FC<ChallengeDetailScreenProps> = memo((props) => {
  const userInfo = useRecoilValue(user);

  const [selectRecord, setSelectRecord] = useState(0);
  const onSelectRecord = useCallback((id: number) => {
    setSelectRecord(id);
  }, []);

  const { tournament_id } = props.route.params;
  const filter = useSupabaseFilter(
    (query) =>
      query
        .select('id, user_id, record, created_at, location(id, location)')
        .eq('tournament_id', tournament_id)
        .eq('user_id', userInfo.id)
        .order('record'),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<Record>('record', { filter });

  if (loading) return <ActivityIndicator message="大会情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="記録が見つかりませんでした。" />;

  const bestTime = formatRecord(data[0].record);

  // coordinates から座標のみ取得
  const coordinateResult = data[selectRecord].location.location.map((coordinate) => {
    return { latitude: coordinate.latitude, longitude: coordinate.longitude };
  });
  // coordinates からカラーコードのみ取得
  const strokeResult = data[selectRecord].location.location.map((coordinate) => coordinate.color);

  return (
    <>
      <Text style={style.best_time_title} color="color2">
        あなたのベストタイム
      </Text>
      <Text style={style.best_time}>{bestTime}</Text>

      <MapView
        style={style.map}
        initialRegion={{
          latitude: data[0].location.location[0].latitude,
          longitude: data[0].location.location[0].longitude,
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
        data={data}
        style={flatListStyle.list}
        keyExtractor={(item, _) => String(item.id)}
        renderItem={({ item, index }) => (
          <MyRecordTableBody
            {...item}
            index={index}
            activeIndex={selectRecord}
            onSelectRecord={onSelectRecord}
          />
        )}
        ListFooterComponent={() => <View style={flatListStyle.bottom_space_medium} />}
      />
    </>
  );
});

const style = StyleSheet.create({
  best_time_title: {
    paddingTop: '4%',
    paddingHorizontal: '4%',
    fontSize: 16,
  },
  best_time: {
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: '800',
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
