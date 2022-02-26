import type { FC } from 'react';
import React from 'react';

import type { ResultScreenProps } from '~/components/screen/Result';
import { ResultScreen as Screen } from '~/components/screen/Result';

export const ResultScreen: FC<ResultScreenProps> = (props) => {
  return <Screen {...props} />;
};
