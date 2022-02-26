import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import type { ResultScreenProps } from './ScreenProps';
import { TournamentResult } from './TournamentResult';

export const TournamentResultScene: FC<ResultScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <TournamentResult {...props} />
    </LayoutErrorBoundary>
  );
};
