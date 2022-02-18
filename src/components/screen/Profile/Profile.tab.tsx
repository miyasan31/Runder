import type { VFC } from 'react';
import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { MilitaryHistory } from '~/components/screen/Profile/MilitaryHistory';
import { PrizesCount } from '~/components/screen/Profile/PrizesCount';
import { TabBar } from '~/components/ui/TabBar';
import { useTabView } from '~/hooks/useTabView';

import type { ProfileScreenProps } from './ScreenProps';

const routes = [
  { key: 'prizesCount', title: '入賞回数' },
  { key: 'history', title: '戦歴' },
];

export const ProfileTab: VFC<ProfileScreenProps> = (props) => {
  const { layout, index, onIndexChange } = useTabView();

  return (
    <TabView
      renderTabBar={TabBar}
      navigationState={{ index, routes }}
      onIndexChange={onIndexChange}
      initialLayout={{ width: layout.width }}
      renderScene={SceneMap({
        prizesCount: () => <PrizesCount {...props} />,
        history: () => <MilitaryHistory {...props} />,
      })}
    />
  );
};
