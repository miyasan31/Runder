import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import type { RankingScreenProps } from './ScreenProps';
import { TotalRanking } from './TotalRanking';

export const TotalRankingScene: VFC<RankingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <TotalRanking {...props} />
    </LayoutErrorBoundary>
  );
};
