import type { FC } from 'react';
import React, { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { TournamentScreenProps } from '~/components/screen/Tournament';
import { ChallengeTournament, VirtualTournament } from '~/components/screen/Tournament';
import { BottomTabLayout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

const routes = [
  { key: 'virtual', title: 'バーチャル大会一覧' },
  { key: 'challenge', title: 'チャレンジ中の大会' },
];

export const TournamentScreen: FC<TournamentScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      virtual: () => <VirtualTournament {...props} />,
      challenge: () => <ChallengeTournament {...props} />,
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
