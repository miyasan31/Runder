import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import type { SignUpScreenProps } from '~/components/screen/SignUp';
import { SignUp } from '~/components/screen/SignUp';
import { GoBackButton } from '~/components/ui/Button';
import { FullScreenLayout } from '~/components/ui/Layout';

export const SignUpScreen: FC<SignUpScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <FullScreenLayout bg="bg2" isCenter>
          <GoBackButton isFloating />
          <SignUp {...props} />
        </FullScreenLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
