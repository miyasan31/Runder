import React from 'react';

import type { ProfileScreenProps } from '~/components/screen/Profile';
import { Profile } from '~/components/screen/Profile';

export const ProfileScreen: ProfileScreenProps = (props) => {
  return <Profile {...props} />;
};
