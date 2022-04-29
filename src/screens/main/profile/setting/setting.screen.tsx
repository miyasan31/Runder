import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { SettingScreenProps } from '~/components/screen/Setting';
import { Setting } from '~/components/screen/Setting';
import { BottomTabLayout } from '~/components/ui/Layout';

export const SettingScreen: FC<SettingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <Setting {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
