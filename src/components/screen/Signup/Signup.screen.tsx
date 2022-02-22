import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SignUpScreenProps } from './ScreenProps';
import { SignUp } from './SignUp';

export const SignUpScreen: VFC<SignUpScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bgTheme="bg2" isCenter>
        <SignUp {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
