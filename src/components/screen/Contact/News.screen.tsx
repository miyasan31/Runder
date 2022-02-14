import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { News } from './News';
import type { ContactScreenProps } from './ScreenProps';

export const NewsScreen: ContactScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout>
        <News {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
