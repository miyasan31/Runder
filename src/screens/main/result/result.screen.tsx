import React from 'react';

import type { ResultScreenProps } from '~/components/screen/Result';
import { Result } from '~/components/screen/Result';

export const ResultScreen: ResultScreenProps = (props) => {
  return <Result {...props} />;
};
