import type { FC } from 'react';
import React, { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import type { RelationshipScreenProps } from '~/components/screen/Relationship';
import { DevOps, News } from '~/components/screen/Relationship';
import { BottomTabLayout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

const routes = [
  { key: 'news', title: 'お知らせ' },
  { key: 'devOps', title: '開発者への意見' },
];

export const RelationshipScreen: FC<RelationshipScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      news: () => (
        <LayoutErrorBoundary>
          <News {...props} />
        </LayoutErrorBoundary>
      ),
      devOps: () => (
        <LayoutErrorBoundary>
          <KeyboardAvoiding>
            <DevOps {...props} />
          </KeyboardAvoiding>
        </LayoutErrorBoundary>
      ),
    });
  }, [props]);

  return (
    <BottomTabLayout safeArea="top-horizontal">
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={renderScene}
      />
    </BottomTabLayout>
  );
};
