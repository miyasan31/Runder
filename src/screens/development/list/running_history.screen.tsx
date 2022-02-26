import type { FC } from 'react';
import React from 'react';

import type { Props } from '~/components/screen/RunningHistory';
import { RunningHistory } from '~/components/screen/RunningHistory';

export const RunningHistoryScreen: FC<Props> = (props) => {
  return <RunningHistory {...props} />;
};
