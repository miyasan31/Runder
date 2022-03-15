import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { RankingScreenProps } from '~/components/screen/Ranking';
import { Ranking } from '~/components/screen/Ranking';
import { BottomTabLayout } from '~/components/ui/Layout';

export const RankingScreen: FC<RankingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <Ranking {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
