import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import type { RankingScreenProps } from './ScreenProps';
import { TotalRanking } from './TotalRanking';

export const TotalRankingScene: FC<RankingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <TotalRanking {...props} />
    </LayoutErrorBoundary>
  );
};
