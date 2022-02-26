import type { FC } from 'react';
import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { Layout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { PointResultScene } from './PointResult.scene';
import type { ResultScreenProps } from './ScreenProps';
import { TounamentResultScene } from './TounamentResult.scene';

const routes = [
  { key: 'tounament', title: '大会の参加履歴' },
  { key: 'point', title: 'ポイントの獲得履歴' },
];

export const ResultScreen: FC<ResultScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <Layout layout="tabheader-bottomtab">
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          tounament: () => <TounamentResultScene {...props} />,
          point: () => <PointResultScene {...props} />,
        })}
      />
    </Layout>
  );
};
