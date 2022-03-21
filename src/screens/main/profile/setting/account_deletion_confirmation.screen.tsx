import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { AccountDeletionConfirmationScreenProps } from '~/components/screen/AccountDeletionConfirmation';
import { AccountDeletionConfirmation } from '~/components/screen/AccountDeletionConfirmation';
import { FullScreenLayout } from '~/components/ui/Layout';

export const AccountDeletionConfirmationScreen: FC<AccountDeletionConfirmationScreenProps> = (
  props,
) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <AccountDeletionConfirmation {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
