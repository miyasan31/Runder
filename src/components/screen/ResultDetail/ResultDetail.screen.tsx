import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { BottomTabLayout } from '~/components/ui/Layout';

import { ResultDetail } from './ResultDetail';
import type { ResultDetailScreenProps } from './ScreenProps';

export const ResultDetailScreen: FC<ResultDetailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <ResultDetail {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
