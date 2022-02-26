import type { FC } from 'react';
import React from 'react';

import type { SignUpScreenProps } from '~/components/screen/SignUp';
import { SignUpScreen as Screen } from '~/components/screen/SignUp';

export const SignUpScreen: FC<SignUpScreenProps> = (props) => {
  return <Screen {...props} />;
};
