import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { AvatarEditScreenProps } from '~/components/screen/AvatarEdit';
import { AvatarEdit } from '~/components/screen/AvatarEdit';
import { FullScreenLayout } from '~/components/ui/Layout';

export const AvatarEditScreen: FC<AvatarEditScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <AvatarEdit {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
