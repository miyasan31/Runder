import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { ChallengeTounament } from './ChallengeTounament';
import type { TounamentScreenProps } from './ScreenProps';

export const ChallengeTounamentScreen: TounamentScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout>
        <ChallengeTounament {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
