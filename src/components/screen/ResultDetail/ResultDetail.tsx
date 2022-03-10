import type { FC } from 'react';
import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { TableHead } from '~/components/ui/Table';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';

import type { ResultDetailScreenProps } from './ScreenProps';

const data = [
  { rank: 1, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 2, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 3, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 4, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 5, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 6, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 7, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 8, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 9, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
  { rank: 100, record: '10:00.00', user: { name: 'ユーザー1', icon: '' } },
];

export const ResultDetail: FC<ResultDetailScreenProps> = () => {
  return (
    <FlatList
      data={data}
      style={flatListStyle.bottom_space}
      keyExtractor={(item, _) => String(item.rank)}
      renderItem={({ item }) => (
        <View style={style.box}>
          <RecordTableBody {...item} />
        </View>
      )}
      ListHeaderComponent={() => (
        <>
          <Image source={require('assets/develop/tournament.jpeg')} style={style.image} />

          <View style={style.float_text_box}>
            <Text style={style.tournament_season} color="white">
              Monthly
            </Text>
            <Text style={style.tournament_season} color="white">
              1/1 - 1/31
            </Text>
            <Text style={style.tournament_name} color="white">
              Winter Distance Challenge
            </Text>
            <Text style={style.tournament_distance} color="white">
              3000m
            </Text>
          </View>

          <View style={style.box}>
            <Text style={style.section_title} color="color1">
              あなたの結果
            </Text>

            <View style={style.align_horizontal}>
              <Text style={style.info_label_left} color="color2">
                順位
              </Text>
              <Text style={style.info_label_right} color="color2">
                ベストタイム
              </Text>
            </View>

            <View style={style.align_horizontal}>
              <Text style={style.info_result_left} color="primary">
                10{'位'}
              </Text>
              <Text style={style.info_result_right} color="primary">
                10:00.00
              </Text>
            </View>

            <Text style={style.section_title} color="color1">
              ランキング・ポイント
            </Text>
            <TableHead leftTitle="大会" rightTitle="記録" />
          </View>
        </>
      )}
    />
  );
};

const style = StyleSheet.create({
  box: {
    paddingHorizontal: '3%',
  },
  section_title: {
    marginTop: '6%',
    marginBottom: '3%',

    fontSize: 20,
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: 160,
  },
  float_text_box: {
    position: 'absolute',
    top: 0,
    left: 0,

    justifyContent: 'center',
    padding: '6%',
    height: 160,
  },
  tournament_season: {
    marginBottom: '1%',

    fontWeight: '600',
  },
  tournament_name: {
    marginTop: '1%',
    marginBottom: '1%',

    fontWeight: '600',
    fontSize: 24,
  },
  tournament_distance: {
    fontWeight: '800',
    fontSize: 26,
  },
  //
  align_horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
    paddingHorizontal: '2%',
  },
  info_label_left: {
    width: '50%',

    fontSize: 16,
  },
  info_label_right: {
    width: '50%',

    fontSize: 16,
    textAlign: 'right',
  },
  info_result_left: {
    width: '50%',

    fontSize: 34,
    fontWeight: '800',
  },
  info_result_right: {
    width: '50%',

    fontSize: 34,
    fontWeight: '800',
    textAlign: 'right',
  },
});
