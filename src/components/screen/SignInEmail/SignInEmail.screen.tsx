import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { GoBackButton } from '~/components/ui/Button';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SignInEmailScreenProps } from './ScreenProps';
import { SignInEmail } from './SignInEmail';

export const SignInEmailScreen: VFC<SignInEmailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <SafeAreaLayout bgTheme="bg2" isCenter>
          <GoBackButton isFloating />
          <SignInEmail {...props} />
        </SafeAreaLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
