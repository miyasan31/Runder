import type { FC } from 'react';
import React, { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { CombatHistoryScene } from './CombatHistory.scene';
import type { ChallengeDetailScreenProps } from './ScreenProps';
import { TournamentDetailScene } from './TournamentDetail.scene';

const routes = [
  { key: 'detail', title: '大会詳細' },
  { key: 'combat', title: 'あなたの戦歴' },
];

export const ChallengeDetailScreen: FC<ChallengeDetailScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      detail: () => <TournamentDetailScene {...props} />,
      combat: () => <CombatHistoryScene {...props} />,
    });
  }, [props]);

  return (
    <TabView
      renderTabBar={TabBar}
      navigationState={{ index, routes }}
      onIndexChange={onIndexChange}
      initialLayout={{ width: layout.width }}
      renderScene={renderScene}
    />
  );
};
