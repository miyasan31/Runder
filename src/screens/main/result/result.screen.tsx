import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ResultScreenProps } from '~/components/screen/Result';
import { Result } from '~/components/screen/Result';
import { BottomTabLayout } from '~/components/ui/Layout';

export const ResultScreen: FC<ResultScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <Result {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
