import type { FC } from 'react';
import { useMemo } from 'react';
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
  id: number;
  isVisible: boolean;
  activeTabIndex?: number;
  onCloseModal: () => void;
};

export const TournamentDetailModal: FC<Props> = ({ id, activeTabIndex, ...otherProps }) => {
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      rule: () => <Rule id={id} />,
      point: () => <Point id={id} />,
      ranking: () => <Ranking id={id} />,
    });
  }, [id]);

  return (
    <HalfModal {...otherProps} size={0.7}>
      <TabView
        renderTabBar={TabBar}
        navigationState={{ index: activeTabIndex || index, routes }}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderScene={renderScene}
      />
    </HalfModal>
  );
};
