import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { ChallengeTournament } from './ChallengeTournament';
import type { TournamentScreenProps } from './ScreenProps';

export const ChallengeTournamentScreen: VFC<TournamentScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout>
        <ChallengeTournament {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
