import type { FC } from 'react';
import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { BottomTabLayout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { DevOpsScene } from './DevOps.scene';
import { NewsScene } from './News.scene';
import type { ContactScreenProps } from './ScreenProps';

const routes = [
  { key: 'news', title: 'お知らせ' },
  { key: 'devOps', title: '開発者への意見' },
];

export const ContactScreen: FC<ContactScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <BottomTabLayout safeArea="top-horizontal">
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
    </BottomTabLayout>
  );
};
