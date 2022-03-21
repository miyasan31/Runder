import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { AccountDeletionScreenProps } from '~/components/screen/AccountDeletion';
import { AccountDeletion } from '~/components/screen/AccountDeletion';
import { FullScreenLayout } from '~/components/ui/Layout';

export const AccountDeletionScreen: FC<AccountDeletionScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <AccountDeletion {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
