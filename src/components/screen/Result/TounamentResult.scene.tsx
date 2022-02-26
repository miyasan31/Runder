import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import type { ResultScreenProps } from './ScreenProps';
import { TounamentResult } from './TounamentResult';

export const TounamentResultScene: FC<ResultScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <TounamentResult {...props} />
    </LayoutErrorBoundary>
  );
};
