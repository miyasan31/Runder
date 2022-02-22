import type { VFC } from 'react';
import React from 'react';

import type { SignInEmailScreenProps } from '~/components/screen/SignInEmail';
import { SignInEmailScreen as Screen } from '~/components/screen/SignInEmail';

export const SignInEmailScreen: VFC<SignInEmailScreenProps> = (props) => {
  return <Screen {...props} />;
};
