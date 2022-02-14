import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { Profile } from './Profile';
import type { ProfileScreenProps } from './ScreenProps';

export const ProfileScreen: ProfileScreenProps = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout>
        <Profile {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
