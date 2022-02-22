import type { VFC } from 'react';
import React from 'react';

import type { SignUpScreenProps } from '~/components/screen/SignUp';
import { SignUpScreen as Screen } from '~/components/screen/SignUp';

export const SignUpScreen: VFC<SignUpScreenProps> = (props) => {
  return <Screen {...props} />;
};
