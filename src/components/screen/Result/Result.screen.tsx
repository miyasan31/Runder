import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { BottomTabLayout } from '~/components/ui/Layout';

import { Result } from './Result';
import type { ResultScreenProps } from './ScreenProps';

export const ResultScreen: FC<ResultScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout layout="horizontal">
        <Result {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
