import React, { useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabViewProvider } from '~/components/functional/TabViewProvider';
import { TabBar } from '~/components/ui/TabBar';

import { MonthlyRankingScreen } from './MonthlyRanking.screen';
import type { RankingScreenProps } from './ScreenProps';
import { TotalRankingScreen } from './TotalRanking.screen';

const routes = [
  { key: 'virtual', title: 'バーチャル大会一覧' },
  { key: 'challenge', title: 'チャレンジ中の大会' },
];

export const Ranking: RankingScreenProps = (props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const onIndexChange = useCallback((i: number) => setIndex(i), []);

  return (
    <TabViewProvider>
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          virtual: () => <MonthlyRankingScreen {...props} />,
          challenge: () => <TotalRankingScreen {...props} />,
        })}
      />
    </TabViewProvider>
  );
};
