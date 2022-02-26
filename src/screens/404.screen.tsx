import type { FC } from 'react';
import React from 'react';

import type { Props } from '~/components/screen/404';
import { NotFound } from '~/components/screen/404';

export const NotFoundScreen: FC<Props> = (props) => {
  return <NotFound {...props} />;
};
