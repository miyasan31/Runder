import type { VFC } from 'react';
import React from 'react';

import type { Props } from '~/components/screen/Signin';
import { Signin } from '~/components/screen/Signin';

export const SigninScreen: VFC<Props> = (props) => {
  return <Signin {...props} />;
};
