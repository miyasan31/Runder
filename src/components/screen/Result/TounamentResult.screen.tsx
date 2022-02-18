import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import type { ResultScreenProps } from './ScreenProps';
import { TounamentResult } from './TounamentResult';

export const TounamentResultScreen: ResultScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout layout="tabheader-bottomtab">
        <TounamentResult {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
