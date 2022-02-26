import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Layout } from '~/components/ui/Layout';

import { Profile } from './Profile';
import type { ProfileScreenProps } from './ScreenProps';

export const ProfileScreen: FC<ProfileScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <Layout layout="headerless-bottomtab">
        <Profile {...props} />
      </Layout>
    </LayoutErrorBoundary>
  );
};
