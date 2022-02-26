import type { FC } from 'react';
import React from 'react';

import type { SignInScreenProps } from '~/components/screen/SignIn';
import { SignInScreen as Screen } from '~/components/screen/SignIn';

export const SignInScreen: FC<SignInScreenProps> = (props) => {
  return <Screen {...props} />;
};
