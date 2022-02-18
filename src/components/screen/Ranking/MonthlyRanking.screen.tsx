import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { MonthlyRanking } from './MonthlyRanking';
import type { RankingScreenProps } from './ScreenProps';

export const MonthlyRankingScreen: RankingScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout layout="tabheader-bottomtab">
        <MonthlyRanking {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
