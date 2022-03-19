import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import type { UserRegisterScreenProps } from '~/components/screen/UserRegister';
import { UserRegister } from '~/components/screen/UserRegister';
import { FullScreenLayout } from '~/components/ui/Layout';

export const UserRegisterScreen: FC<UserRegisterScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <KeyboardAvoiding>
        <FullScreenLayout bg="bg2" isCenter>
          <UserRegister {...props} />
        </FullScreenLayout>
      </KeyboardAvoiding>
    </LayoutErrorBoundary>
  );
};
