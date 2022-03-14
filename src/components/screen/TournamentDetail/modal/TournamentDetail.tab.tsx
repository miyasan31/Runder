import type { FC } from 'react';
import { useMemo } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import { Point } from './Point';
import { Ranking } from './Ranking';
import { Rule } from './Rule';

const routes = [
  { key: 'rule', title: 'ルール' },
  { key: 'point', title: 'ポイント' },
  { key: 'ranking', title: 'ランキング' },
];

type Props = {
  activeTabIndex?: number;
};

export const TournamentDetailTab: FC<Props> = (props) => {
  const { layout, index, onIndexChange } = useTabView(props.activeTabIndex);

  const renderScene = useMemo(() => {
    return SceneMap({
      rule: () => <Rule />,
      point: () => <Point />,
      ranking: () => <Ranking />,
    });
  }, []);

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
