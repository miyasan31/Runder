import type { VFC } from 'react';
import React from 'react';

import type { UserRegisterScreenProps } from '~/components/screen/UserRegister';
import { UserRegisterScreen as Screen } from '~/components/screen/UserRegister';

export const UserRegisterScreen: VFC<UserRegisterScreenProps> = (props) => {
  return <Screen {...props} />;
};
