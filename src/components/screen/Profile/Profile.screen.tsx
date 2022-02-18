import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { Profile } from './Profile';
import type { ProfileScreenProps } from './ScreenProps';

export const ProfileScreen: VFC<ProfileScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout layout="headerless-bottomtab">
        <Profile {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
