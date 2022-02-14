import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabViewProvider } from '~/components/functional/TabViewProvider';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { MonthlyRankingScreen } from './MonthlyRanking.screen';
import type { RankingScreenProps } from './ScreenProps';
import { TotalRankingScreen } from './TotalRanking.screen';

const routes = [
  { key: 'total', title: '総合ポイントランキング' },
  { key: 'monthly', title: '月間ポイントランキング' },
];

export const Ranking: RankingScreenProps = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <TabViewProvider>
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          total: () => <TotalRankingScreen {...props} />,
          monthly: () => <MonthlyRankingScreen {...props} />,
        })}
      />
    </TabViewProvider>
  );
};
