import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { SignInScreenProps } from '~/components/screen/SignIn/SignIn';
import { SignIn } from '~/components/screen/SignIn/SignIn';
import { FullScreenLayout } from '~/components/ui/Layout';

export const SignInScreen: FC<SignInScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout bg="bg2" isCenter>
        <SignIn {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
