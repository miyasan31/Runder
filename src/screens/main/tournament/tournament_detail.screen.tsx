import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { TournamentDetailScreenProps } from '~/components/screen/TournamentDetail';
import { TournamentDetail } from '~/components/screen/TournamentDetail';
import { BottomTabLayout } from '~/components/ui/Layout';

export const TournamentDetailScreen: FC<TournamentDetailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <TournamentDetail {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
