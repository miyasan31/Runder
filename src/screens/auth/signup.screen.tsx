import type { VFC } from 'react';
import React from 'react';

import type { SignupScreenProps } from '~/components/screen/Signup';
import { SignupScreen as Screen } from '~/components/screen/Signup';

export const SignupScreen: VFC<SignupScreenProps> = (props) => {
  return <Screen {...props} />;
};
