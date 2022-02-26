import type { FC } from 'react';
import React from 'react';

import type { Props } from '~/components/screen/RunningDetail';
import { RunningDetail } from '~/components/screen/RunningDetail';

export const RunningDetailScreen: FC<Props> = (props) => {
  return <RunningDetail {...props} />;
};
