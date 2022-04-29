import type { FC } from 'react';
import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';

import { RecordTableBody } from '~/components/model/record/RecordTableBody';
import { ActivityIndicator } from '~/components/ui/Progress';
import { SexAndAgeHierarchySelect } from '~/components/ui/SexAndAgeHierarchySelect';
import { TableHead } from '~/components/ui/Table';
import { ExceptionText, Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { grantedPoint } from '~/functions/grantedPoint';
import { termCheck } from '~/functions/termCheck';
import { user } from '~/stores/user';
import { flatListStyle } from '~/styles';
import type { ResultScreenProps as Props } from '~/types';

import { useResultDetail } from './useResultDetail';

export type ResultDetailScreenProps = Props<'ResultDetailScreen'>;

export const ResultDetail: FC<ResultDetailScreenProps> = ({ route }) => {
  const userInfo = useRecoilValue(user);
  const {
    tournament_id,
    tournament_image_semi,
    tournament_name,
    tournament_start,
    tournament_end,
    tournament_term,
    tournament_distance,
    best_record,
  } = route.params;

  // TODO:男女年齢フィルターを実装する
  const { data, error, loading } = useResultDetail(tournament_id);

  if (loading) return <ActivityIndicator message="ポイント情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="記録がまだありません。" />;

  const termResult = termCheck(tournament_term);
  const ranking = data.best_record.findIndex((record) => record.user.id === userInfo.id) + 1;

  console.info(data.point_table);

  return (
    <FlatList
      data={data.best_record}
      keyExtractor={(item, _) => String(item.id)}
      ListHeaderComponent={() => (
        <>
          <Image source={{ uri: tournament_image_semi }} style={style.image} />

          <View style={style.float_text_box}>
            <Text style={style.tournament_season} color="white">
              {termResult}
            </Text>
            <Text style={style.tournament_season} color="white">
              {`${tournament_start} - ${tournament_end}`}
            </Text>
            <Text style={style.tournament_name} color="white">
              {tournament_name}
            </Text>
            <Text style={style.tournament_distance} color="white">
              {`${tournament_distance}m`}
            </Text>
          </View>

          <View style={style.box}>
            <Text style={style.section_title} color="color2">
              あなたの結果
            </Text>

            <View style={style.align_horizontal}>
              <View style={style.info_result_left}>
                <Text style={style.info_result_rank}>{ranking}</Text>
                <Text style={style.info_result_space}>位</Text>
              </View>
              <Text style={style.info_result_record} color="color1">
                {best_record}
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
      renderItem={({ item, index }) => {
        return (
          <RecordTableBody
            {...item}
            ranking={index + 1}
            point={grantedPoint(data.point_table, index)}
            outlineStyle={style.list}
          />
        );
      }}
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
