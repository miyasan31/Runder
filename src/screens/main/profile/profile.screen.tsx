import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ProfileScreenProps } from '~/components/screen/Profile';
import { Profile } from '~/components/screen/Profile';
import { BottomTabLayout } from '~/components/ui/Layout';

export const ProfileScreen: FC<ProfileScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <Profile {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
