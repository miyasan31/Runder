import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { GoBackButton } from '~/components/ui/Button';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SignUpScreenProps } from './ScreenProps';
import { SignUp } from './SignUp';

export const SignUpScreen: FC<SignUpScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <SafeAreaLayout bg="bg2" isCenter>
          <GoBackButton isFloating />
          <SignUp {...props} />
        </SafeAreaLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
