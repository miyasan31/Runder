import type { VFC } from 'react';
import React from 'react';

import type { Props } from '~/components/screen/404';
import { NotFound } from '~/components/screen/404';

export const NotFoundScreen: VFC<Props> = (props) => {
  return <NotFound {...props} />;
};
