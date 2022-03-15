import type { FC } from 'react';
import React from 'react';

import type { AvatarEditScreenProps } from '~/components/screen/AvatarEdit';
import { AvatarEditScreen as Screen } from '~/components/screen/AvatarEdit';

export const AvatarEditScreen: FC<AvatarEditScreenProps> = (props) => {
  return <Screen {...props} />;
};
