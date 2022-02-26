import type { FC } from 'react';
import React from 'react';

import type { Props } from '~/components/screen/Running';
import { Running } from '~/components/screen/Running';

export const RunningScreen: FC<Props> = (props) => {
  return <Running {...props} />;
};
