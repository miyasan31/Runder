import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import type { TournamentScreenProps } from './ScreenProps';
import { VirtualTournament } from './VirtualTournament';

export const VirtualTournamentScreen: VFC<TournamentScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout>
        <VirtualTournament {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
