import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SignupScreenProps } from './ScreenProps';
import { Signup } from './Signup';

export const SignupScreen: VFC<SignupScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bgTheme="bg2" isCenter>
        <Signup {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
