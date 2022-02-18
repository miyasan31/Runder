import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { PointResult } from './PointResult';
import type { ResultScreenProps } from './ScreenProps';

export const PointResultScreen: ResultScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout layout="tabheader-bottomtab">
        <PointResult {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
