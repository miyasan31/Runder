import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabViewProvider } from '~/components/functional/TabViewProvider';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { ChallengeTournamentScreen } from './ChallengeTournament.screen';
import type { TournamentScreenProps } from './ScreenProps';
import { VirtualTournamentScreen } from './VirtualTournament.screen';

const routes = [
  { key: 'virtual', title: 'バーチャル大会一覧' },
  { key: 'challenge', title: 'チャレンジ中の大会' },
];

export const Tournament: TournamentScreenProps = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <TabViewProvider>
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          virtual: () => <VirtualTournamentScreen {...props} />,
          challenge: () => <ChallengeTournamentScreen {...props} />,
        })}
      />
    </TabViewProvider>
  );
};
