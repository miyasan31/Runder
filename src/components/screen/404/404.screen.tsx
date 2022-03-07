import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { SafeAreaLayout } from '~/components/ui/Layout';

import { NotFound } from './404';
import type { NotFoundScreenProps } from './ScreenProps';

export const NotFoundScreen: FC<NotFoundScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout>
        <NotFound {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
