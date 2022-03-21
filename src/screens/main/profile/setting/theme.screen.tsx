import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ThemeScreenProps } from '~/components/screen/Theme';
import { Theme } from '~/components/screen/Theme';
import { FullScreenLayout } from '~/components/ui/Layout';

export const ThemeScreen: FC<ThemeScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <Theme {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
