import type { FC } from 'react';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header';

import { TabBar } from '~/components/ui/TabBar';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useTabView } from '~/hooks/useTabView';

import { MonthlyRankingScene } from './MonthlyRanking.scene';
import type { RankingScreenProps } from './ScreenProps';
import { TotalRankingScene } from './TotalRanking.scene';

const routes = [
  { key: 'total', title: '総合ランキング' },
  { key: 'monthly', title: '月間ランキング' },
];

export const Ranking: FC<RankingScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      total: () => <TotalRankingScene {...props} />,
      monthly: () => <MonthlyRankingScene {...props} />,
    });
  }, [props]);

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
                <Text style={style.info_result}>1</Text>
                <Text style={style.info_result_space}>位</Text>
              </View>

              <View style={style.info_result_right}>
                <Text style={style.info_result}>1200</Text>
                <Text style={style.info_result_space}>ポイント</Text>
              </View>
            </View>

            <Text style={style.sub_title} color="color2">
              月間ランキング
            </Text>

            <View style={style.align_horizontal}>
              <View style={style.info_result_left}>
                <Text style={style.info_result}>10</Text>
                <Text style={style.info_result_space}>位</Text>
              </View>

              <View style={style.info_result_right}>
                <Text style={style.info_result}>300</Text>
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
