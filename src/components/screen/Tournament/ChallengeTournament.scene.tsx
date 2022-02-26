import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import { ChallengeTournament } from './ChallengeTournament';
import type { TournamentScreenProps } from './ScreenProps';

export const ChallengeTournamentScene: FC<TournamentScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <ChallengeTournament {...props} />
    </LayoutErrorBoundary>
  );
};
