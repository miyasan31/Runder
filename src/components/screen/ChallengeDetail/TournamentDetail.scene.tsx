import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { BottomTabLayout } from '~/components/ui/Layout';

import type { ChallengeDetailScreenProps } from './ScreenProps';
import { TournamentDetail } from './TournamentDetail';

export const TournamentDetailScene: FC<ChallengeDetailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <TournamentDetail {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
