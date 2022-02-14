import React, { useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabViewProvider } from '~/components/functional/TabViewProvider';
import { TabBar } from '~/components/ui/TabBar';

import { DevOpsScreen } from './DevOps.screen';
import { NewsScreen } from './News.screen';
import type { ContactScreenProps } from './ScreenProps';

const routes = [
  { key: 'devOps', title: '開発者への意見' },
  { key: 'news', title: 'お知らせ' },
];

export const Contact: ContactScreenProps = (props) => {
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
          devOps: () => <DevOpsScreen {...props} />,
          news: () => <NewsScreen {...props} />,
        })}
      />
    </TabViewProvider>
  );
};
