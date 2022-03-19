import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ResultDetailScreenProps } from '~/components/screen/ResultDetail';
import { ResultDetail } from '~/components/screen/ResultDetail';
import { BottomTabLayout } from '~/components/ui/Layout';

export const ResultDetailScreen: FC<ResultDetailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <ResultDetail {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
