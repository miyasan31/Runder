import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { SettingScreenProps } from '~/components/screen/Setting';
import { Setting } from '~/components/screen/Setting';
import { FullScreenLayout } from '~/components/ui/Layout';

export const SettingScreen: FC<SettingScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <Setting {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
