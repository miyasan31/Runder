import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import { PointResult } from './PointResult';
import type { ResultScreenProps } from './ScreenProps';

export const PointResultScene: FC<ResultScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <PointResult {...props} />
    </LayoutErrorBoundary>
  );
};
