import type { FC } from 'react';
import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { BottomTabLayout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { MonthlyRankingScene } from './MonthlyRanking.scene';
import type { RankingScreenProps } from './ScreenProps';
import { TotalRankingScene } from './TotalRanking.scene';

const routes = [
  { key: 'total', title: '総合ポイントランキング' },
  { key: 'monthly', title: '月間ポイントランキング' },
];

export const RankingScreen: FC<RankingScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <BottomTabLayout layout="top-horizontal">
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          total: () => <TotalRankingScene {...props} />,
          monthly: () => <MonthlyRankingScene {...props} />,
        })}
      />
    </BottomTabLayout>
  );
};
