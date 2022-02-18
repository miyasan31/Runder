import type { VFC } from 'react';
import React from 'react';

import type { ProfileScreenProps } from '~/components/screen/Profile';
import { ProfileScreen as Screen } from '~/components/screen/Profile';

export const ProfileScreen: VFC<ProfileScreenProps> = (props) => {
  return <Screen {...props} />;
};
