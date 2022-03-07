import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { CombatHistory } from './CombatHistory';
import type { ChallengeDetailScreenProps } from './ScreenProps';

export const CombatHistoryScene: FC<ChallengeDetailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout layout="header-bottomtab">
        <CombatHistory {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
