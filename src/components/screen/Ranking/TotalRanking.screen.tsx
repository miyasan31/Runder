import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import type { RankingScreenProps } from './ScreenProps';
import { TotalRanking } from './TotalRanking';

export const TotalRankingScreen: RankingScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout>
        <TotalRanking {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
