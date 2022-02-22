import type { VFC } from 'react';
import React from 'react';

import type { SignInScreenProps } from '~/components/screen/SignIn';
import { SignInScreen as Screen } from '~/components/screen/SignIn';

export const SignInScreen: VFC<SignInScreenProps> = (props) => {
  return <Screen {...props} />;
};
