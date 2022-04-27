import type { FC } from 'react';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header';

import { ActivityIndicator } from '~/components/ui/Progress';
import { TabBar } from '~/components/ui/TabBar';
import { ExceptionText, Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useTabView } from '~/hooks/useTabView';
import type { RankingScreenProps as Props } from '~/types';

import { MonthlyRanking } from './MonthlyRanking';
import { TotalRanking } from './TotalRanking';
import { useRanking } from './useRanking';

export type RankingScreenProps = Props<'RankingScreen'>;

const routes = [
  { key: 'total', title: '総合ランキング' },
  { key: 'monthly', title: '月間ランキング' },
];

export const Ranking: FC<RankingScreenProps> = (props) => {
  const { loading, error, data } = useRanking();
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      total: () => <TotalRanking {...props} />,
      monthly: () => <MonthlyRanking {...props} />,
    });
  }, [props]);

  if (loading) return <ActivityIndicator message="ランキング情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="ランキング情報が見つかりませんでした。" />;

  const { totalRanking, totalPoint, monthlyRanking, monthlyPoint } = data;

  return (
    <CollapsibleHeaderTabView
      renderTabBar={TabBar}
      navigationState={{ index, routes }}
      renderScrollHeader={() => {
        return (
          <View style={style.box} bg="bg1">
            <Text style={style.section_title} color="color2">
              あなたのランキング
            </Text>

            <Text style={style.sub_title} color="color2">
              総合ランキング
            </Text>

            <View style={style.align_horizontal}>
              <View style={style.info_result_left}>
                <Text style={style.info_result}>{totalRanking}</Text>
                <Text style={style.info_result_space}>位</Text>
              </View>

              <View style={style.info_result_right}>
                <Text style={style.info_result}>{totalPoint}</Text>
                <Text style={style.info_result_space}>ポイント</Text>
              </View>
            </View>

            <Text style={style.sub_title} color="color2">
              月間ランキング
            </Text>

            <View style={style.align_horizontal}>
              <View style={style.info_result_left}>
                <Text style={style.info_result}>{monthlyRanking}</Text>
                <Text style={style.info_result_space}>位</Text>
              </View>

              <View style={style.info_result_right}>
                <Text style={style.info_result}>{monthlyPoint}</Text>
                <Text style={style.info_result_space}>ポイント</Text>
              </View>
            </View>

            <Text style={style.section_title} color="color2">
              クラス別ランキング
            </Text>
          </View>
        );
      }}
      onIndexChange={onIndexChange}
      initialLayout={{ width: layout.width }}
      renderScene={renderScene}
      scrollEnabled={false}
      isRefreshing={false}
    />
  );
};

const style = StyleSheet.create({
  box: {
    paddingHorizontal: '4%',
  },
  section_title: {
    marginVertical: '6%',

    fontSize: 20,
    fontWeight: '600',
  },
  sub_title: {
    marginVertical: '3%',
    fontSize: 16,
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
  info_result_right: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_result: {
    width: 'auto',
    fontSize: 42,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  info_result_space: {
    width: 'auto',
    marginTop: 14,
    marginLeft: 4,
    fontSize: 18,
  },
});
