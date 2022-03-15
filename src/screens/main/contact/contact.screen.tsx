import type { FC } from 'react';
import React, { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ContactScreenProps } from '~/components/screen/Contact';
import { DevOps, News } from '~/components/screen/Contact';
import { BottomTabLayout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

const routes = [
  { key: 'news', title: 'お知らせ' },
  { key: 'devOps', title: '開発者への意見' },
];

export const ContactScreen: FC<ContactScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      news: () => <News {...props} />,
      devOps: () => <DevOps {...props} />,
    });
  }, [props]);

  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="top-horizontal">
        <TabView
          renderTabBar={TabBar}
          navigationState={{ index, routes }}
          onIndexChange={onIndexChange}
          initialLayout={{ width: layout.width }}
          renderScene={renderScene}
        />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
