import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabViewProvider } from '~/components/functional/TabViewProvider';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { DevOpsScreen } from './DevOps.screen';
import { NewsScreen } from './News.screen';
import type { ContactScreenProps } from './ScreenProps';

const routes = [
  { key: 'devOps', title: '開発者への意見' },
  { key: 'news', title: 'お知らせ' },
];

export const Contact: ContactScreenProps = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <TabViewProvider>
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          devOps: () => <DevOpsScreen {...props} />,
          news: () => <NewsScreen {...props} />,
        })}
      />
    </TabViewProvider>
  );
};
