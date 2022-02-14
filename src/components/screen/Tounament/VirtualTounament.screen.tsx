import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import type { TounamentScreenProps } from './ScreenProps';
import { VirtualTounament } from './VirtualTounament';

export const VirtualTounamentScreen: TounamentScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout>
        <VirtualTounament {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
