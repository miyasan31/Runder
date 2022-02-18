import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { Signin } from '~/components/screen/Signin/Signin';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SigninScreenProps } from './ScreenProps';

export const SigninScreen: VFC<SigninScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bgTheme="bg2" isCenter>
        <Signin {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
