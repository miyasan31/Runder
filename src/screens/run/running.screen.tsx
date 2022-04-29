import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { DevRunningScreenProps } from '~/components/screen/Running';
import { Running } from '~/components/screen/Running';
import { FullScreenLayout } from '~/components/ui/Layout';

export const RunningScreen: FC<DevRunningScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout>
        <Running {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
