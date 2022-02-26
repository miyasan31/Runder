import type { FC } from 'react';
import React from 'react';

import type { ProfileScreenProps } from '~/components/screen/Profile';
import { ProfileScreen as Screen } from '~/components/screen/Profile';

export const ProfileScreen: FC<ProfileScreenProps> = (props) => {
  return <Screen {...props} />;
};
