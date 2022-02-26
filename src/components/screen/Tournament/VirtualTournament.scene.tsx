import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import type { TournamentScreenProps } from './ScreenProps';
import { VirtualTournament } from './VirtualTournament';

export const VirtualTournamentScene: FC<TournamentScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <VirtualTournament {...props} />
    </LayoutErrorBoundary>
  );
};
