import type { VFC } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { HalfModal } from '~/components/ui/Modal';
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
  isVisible: boolean;
  activeTabIndex?: number;
  onCloseModal: () => void;
};

export const TournamentDetailModal: VFC<Props> = (props) => {
  const { layout, index, onIndexChange } = useTabView(props.activeTabIndex);

  return (
    <HalfModal {...props} size={0.7}>
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={SceneMap({
          rule: () => <Rule />,
          point: () => <Point />,
          ranking: () => <Ranking />,
        })}
      />
    </HalfModal>
  );
};
