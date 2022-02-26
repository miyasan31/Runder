import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { SignIn } from '~/components/screen/SignIn/SignIn';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SignInScreenProps } from './ScreenProps';

export const SignInScreen: FC<SignInScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bgTheme="bg2" isCenter>
        <SignIn {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
