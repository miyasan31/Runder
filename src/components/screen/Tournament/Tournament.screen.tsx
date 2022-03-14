import type { FC } from 'react';
import React, { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { BottomTabLayout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { ChallengeTournamentScene } from './ChallengeTournament.scene';
import type { TournamentScreenProps } from './ScreenProps';
import { VirtualTournamentScene } from './VirtualTournament.scene';

const routes = [
  { key: 'virtual', title: 'バーチャル大会一覧' },
  { key: 'challenge', title: 'チャレンジ中の大会' },
];

export const TournamentScreen: FC<TournamentScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      virtual: () => <VirtualTournamentScene {...props} />,
      challenge: () => <ChallengeTournamentScene {...props} />,
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
