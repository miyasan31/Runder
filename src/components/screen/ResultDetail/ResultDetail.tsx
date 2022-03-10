import type { FC } from 'react';
import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { SexAndAgeHierarchySelect } from '~/components/ui/SexAndAgeHierarchySelect';
import { TableHead } from '~/components/ui/Table';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';

import type { ResultDetailScreenProps } from './ScreenProps';

const data = [
  { rank: 1, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 2, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 3, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 4, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 5, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 6, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 7, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 8, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 9, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
  { rank: 100, record: '10:00.00', point: 100, user: { name: 'ユーザー1', icon: '' } },
];

export const ResultDetail: FC<ResultDetailScreenProps> = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, _) => String(item.rank)}
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
            <Text style={style.section_title} color="color2">
              あなたの結果
            </Text>

            <View style={style.align_horizontal}>
              <Text style={style.info_result_left} color="color1">
                10th
              </Text>
              <Text style={style.info_result_right} color="color1">
                10:00.00
              </Text>
            </View>

            <Text style={style.section_title} color="color2">
              ランキング・ポイント
            </Text>

            <SexAndAgeHierarchySelect />

            <TableHead leftTitle="順位" centerTile="記録" rightTitle="ポイント" />
          </View>
        </>
      )}
      renderItem={({ item }) => (
        <View style={style.box}>
          <RecordTableBody {...item} />
        </View>
      )}
      ListFooterComponent={() => <View style={flatListStyle.bottom_space_large} />}
    />
  );
};

const style = StyleSheet.create({
  box: {
    paddingHorizontal: '3%',
  },
  section_title: {
    marginTop: '8%',
    marginBottom: '3%',

    fontSize: 20,
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: 150,
  },
  float_text_box: {
    position: 'absolute',
    top: 0,
    left: 0,

    justifyContent: 'center',
    padding: '6%',
    height: 150,
  },
  tournament_season: {
    marginBottom: '1%',

    fontWeight: '600',
    fontStyle: 'italic',
  },
  tournament_name: {
    marginTop: '1%',
    marginBottom: '1%',

    fontWeight: '600',
    fontSize: 18,
    fontStyle: 'italic',
  },
  tournament_distance: {
    fontWeight: '600',
    fontSize: 22,
    fontStyle: 'italic',
  },
  align_horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  info_result_left: {
    flex: 1,

    fontSize: 38,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  info_result_right: {
    flex: 2,

    fontSize: 38,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
