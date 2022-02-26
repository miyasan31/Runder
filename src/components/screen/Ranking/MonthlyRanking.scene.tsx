import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import { MonthlyRanking } from './MonthlyRanking';
import type { RankingScreenProps } from './ScreenProps';

export const MonthlyRankingScene: FC<RankingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <MonthlyRanking {...props} />
    </LayoutErrorBoundary>
  );
};
