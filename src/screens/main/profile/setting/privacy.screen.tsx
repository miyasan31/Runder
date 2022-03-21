import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { PrivacyScreenProps } from '~/components/screen/Privacy';
import { Privacy } from '~/components/screen/Privacy';
import { BottomTabLayout } from '~/components/ui/Layout';

export const PrivacyScreen: FC<PrivacyScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <Privacy {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
