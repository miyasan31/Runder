import type { FC } from 'react';
import React, { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { CombatHistory } from './CombatHistory.scene';
import { PodiumHistory } from './PodiumHistory.scene';
import type { ProfileScreenProps } from './ScreenProps';

const routes = [
  { key: 'podium', title: '入賞回数' },
  { key: 'combat', title: '戦歴' },
];

export const HistoryTab: FC<ProfileScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      podium: () => <PodiumHistory {...props} />,
      combat: () => <CombatHistory {...props} />,
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
