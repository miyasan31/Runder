import type { FC } from 'react';
import React from 'react';

import type { ResultDetailScreenProps } from '~/components/screen/ResultDetail';
import { ResultDetailScreen as Screen } from '~/components/screen/ResultDetail';

export const ResultDetailScreen: FC<ResultDetailScreenProps> = (props) => {
  return <Screen {...props} />;
};
