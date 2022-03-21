import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { TermsScreenProps } from '~/components/screen/Terms';
import { Terms } from '~/components/screen/Terms';
import { BottomTabLayout } from '~/components/ui/Layout';

export const TermsScreen: FC<TermsScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <Terms {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
