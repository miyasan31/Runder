import type { FC } from 'react';
import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { SexAndAgeHierarchySelect } from '~/components/ui/SexAndAgeHierarchySelect';
import { TableHead } from '~/components/ui/Table';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { flatListStyle } from '~/styles';
import type { ResultScreenProps as Props } from '~/types';

export type ResultDetailScreenProps = Props<'ResultDetailScreen'>;

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
              <View style={style.info_result_left}>
                <Text style={style.info_result_rank}>10</Text>
                <Text style={style.info_result_space}>位</Text>
              </View>
              <Text style={style.info_result_record} color="color1">
                10:00.00
              </Text>
            </View>

            <Text style={style.section_title} color="color2">
              ランキング・ポイント
            </Text>

            <SexAndAgeHierarchySelect />

            <TableHead
              outlineStyle={style.table_head}
              leftTitle="順位"
              centerTile="記録"
              rightTitle="ポイント"
            />
          </View>
        </>
      )}
      renderItem={({ item }) => <RecordTableBody {...item} outlineStyle={style.list} />}
      ListFooterComponent={() => <View style={flatListStyle.bottom_space_large} />}
    />
  );
};

const style = StyleSheet.create({
  box: {
    paddingHorizontal: '4%',
  },
  list: {
    paddingHorizontal: '6%',
  },
  section_title: {
    marginVertical: '6%',
    fontSize: 20,
    fontWeight: '600',
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
    height: 160,
    padding: '4%',
  },
  tournament_season: {
    fontWeight: '600',
    fontStyle: 'italic',
  },
  tournament_name: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    marginVertical: '2%',
  },
  tournament_distance: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
  },

  align_horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_result_left: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_result_rank: {
    width: 'auto',
    fontSize: 42,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  info_result_record: {
    width: 'auto',
    fontSize: 42,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'right',
  },
  info_result_space: {
    width: 'auto',
    marginTop: 14,
    marginLeft: 4,
    fontSize: 18,
  },
  table_head: {
    marginTop: '4%',
    marginBottom: '2%',
  },
});
