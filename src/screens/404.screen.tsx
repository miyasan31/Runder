import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { NotFoundScreenProps } from '~/components/screen/404';
import { NotFound } from '~/components/screen/404';
import { FullScreenLayout } from '~/components/ui/Layout';

export const NotFoundScreen: FC<NotFoundScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout>
        <NotFound {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
