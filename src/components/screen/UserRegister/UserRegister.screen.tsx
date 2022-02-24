import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { SafeAreaLayout } from '~/components/ui/Layout';

import type { UserRegisterScreenProps } from './ScreenProps';
import { UserRegister } from './UserRegister';

export const UserRegisterScreen: VFC<UserRegisterScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <SafeAreaLayout bgTheme="bg2" isCenter>
          <UserRegister {...props} />
        </SafeAreaLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
