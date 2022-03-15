import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { FullScreenLayout } from '~/components/ui/Layout';

import { AvatarEdit } from './AvatarEdit';
import type { AvatarEditScreenProps } from './ScreenProps';

export const AvatarEditScreen: FC<AvatarEditScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <AvatarEdit {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
