import type { FC } from 'react';
import React from 'react';

import type { ProfileEditScreenProps } from '~/components/screen/ProfileEdit';
import { ProfileEditScreen as Screen } from '~/components/screen/ProfileEdit';

export const ProfileEditScreen: FC<ProfileEditScreenProps> = (props) => {
  return <Screen {...props} />;
};
