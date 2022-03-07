import type { FC } from 'react';
import React from 'react';

import type { NotFoundScreenProps } from '~/components/screen/404';
import { NotFoundScreen as Screen } from '~/components/screen/404';

export const NotFoundScreen: FC<NotFoundScreenProps> = (props) => {
  return <Screen {...props} />;
};
