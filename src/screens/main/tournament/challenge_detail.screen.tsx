import type { FC } from 'react';
import React, { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ChallengeDetailScreenProps } from '~/components/screen/ChallengeDetail';
import { CombatHistory, TournamentDetail } from '~/components/screen/ChallengeDetail';
import { BottomTabLayout } from '~/components/ui/Layout';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

const routes = [
  { key: 'detail', title: '大会詳細' },
  { key: 'combat', title: 'あなたの戦歴' },
];

export const ChallengeDetailScreen: FC<ChallengeDetailScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      detail: () => <TournamentDetail {...props} />,
      combat: () => <CombatHistory {...props} />,
    });
  }, [props]);

  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
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
