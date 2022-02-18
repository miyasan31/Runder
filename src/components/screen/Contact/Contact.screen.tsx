import type { VFC } from 'react';
import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { Layout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { DevOpsScene } from './DevOps.scene';
import { NewsScene } from './News.scene';
import type { ContactScreenProps } from './ScreenProps';

const routes = [
  { key: 'news', title: 'お知らせ' },
  { key: 'devOps', title: '開発者への意見' },
];

export const ContactScreen: VFC<ContactScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <Layout layout="tabheader-bottomtab">
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          news: () => <NewsScene {...props} />,
          devOps: () => <DevOpsScene {...props} />,
        })}
      />
    </Layout>
  );
};
