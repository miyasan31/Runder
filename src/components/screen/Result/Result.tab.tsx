import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabViewProvider } from '~/components/functional/TabViewProvider';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { PointResultScreen } from './PointResult.screen';
import type { ResultScreenProps } from './ScreenProps';
import { TounamentResultScreen } from './TounamentResult.screen';

const routes = [
  { key: 'tounament', title: '大会の参加履歴' },
  { key: 'point', title: 'ポイントの獲得履歴' },
];

export const Result: ResultScreenProps = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <TabViewProvider>
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          tounament: () => <TounamentResultScreen {...props} />,
          point: () => <PointResultScreen {...props} />,
        })}
      />
    </TabViewProvider>
  );
};
