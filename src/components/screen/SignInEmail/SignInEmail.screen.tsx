import type { VFC } from 'react';
import React, { useCallback } from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { GoBackButton } from '~/components/ui/Button';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SignInEmailScreenProps } from './ScreenProps';
import { SignInEmail } from './SignInEmail';

export const SignInEmailScreen: VFC<SignInEmailScreenProps> = (props) => {
  const onGoBackScreen = useCallback(() => {
    props.navigation.goBack();
  }, [props.navigation]);

  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <SafeAreaLayout bgTheme="bg2" isCenter>
          <GoBackButton onPress={onGoBackScreen} />
          <SignInEmail {...props} />
        </SafeAreaLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
