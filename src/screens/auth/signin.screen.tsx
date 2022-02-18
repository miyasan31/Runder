import type { VFC } from 'react';
import React from 'react';

import type { SigninScreenProps } from '~/components/screen/Signin';
import { SigninScreen as Screen } from '~/components/screen/Signin';

export const SigninScreen: VFC<SigninScreenProps> = (props) => {
  return <Screen {...props} />;
};
