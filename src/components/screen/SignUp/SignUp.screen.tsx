import type { VFC } from 'react';
import React, { useCallback } from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { GoBackButton } from '~/components/ui/Button';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { SignUpScreenProps } from './ScreenProps';
import { SignUp } from './SignUp';

export const SignUpScreen: VFC<SignUpScreenProps> = (props) => {
  const onGoBackScreen = useCallback(() => {
    props.navigation.goBack();
  }, [props.navigation]);

  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <SafeAreaLayout bgTheme="bg2" isCenter>
          <GoBackButton onPress={onGoBackScreen} />
          <SignUp {...props} />
        </SafeAreaLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
