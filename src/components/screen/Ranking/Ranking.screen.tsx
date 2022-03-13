import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { BottomTabLayout } from '~/components/ui/Layout';

import { Ranking } from './Ranking';
import type { RankingScreenProps } from './ScreenProps';

export const RankingScreen: FC<RankingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <Ranking {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
