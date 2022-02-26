import type { FC } from 'react';
import React from 'react';

import type { SignInEmailScreenProps } from '~/components/screen/SignInEmail';
import { SignInEmailScreen as Screen } from '~/components/screen/SignInEmail';

export const SignInEmailScreen: FC<SignInEmailScreenProps> = (props) => {
  return <Screen {...props} />;
};
