import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { GoBackButton } from '~/components/ui/Button';
import { FullScreenLayout } from '~/components/ui/Layout';

import type { SignInEmailScreenProps } from './ScreenProps';
import { SignInEmail } from './SignInEmail';

export const SignInEmailScreen: FC<SignInEmailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <FullScreenLayout isCenter>
          <GoBackButton isFloating />
          <SignInEmail {...props} />
        </FullScreenLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
