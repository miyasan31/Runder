import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { BottomTabLayout } from '~/components/ui/Layout';

import { Profile } from './Profile';
import type { ProfileScreenProps } from './ScreenProps';

export const ProfileScreen: FC<ProfileScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="top-horizontal">
        <Profile {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
