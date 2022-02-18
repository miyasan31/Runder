import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { DevOps } from './DevOps';
import type { ContactScreenProps } from './ScreenProps';

export const DevOpsScreen: ContactScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout layout="tabheader-bottomtab">
        <DevOps {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
