import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { BottomTabLayout } from '~/components/ui/Layout';

import type { TournamentDetailScreenProps } from './ScreenProps';
import { TournamentDetail } from './TournamentDetail';

export const TournamentDetailScreen: FC<TournamentDetailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout layout="horizontal">
        <TournamentDetail {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
