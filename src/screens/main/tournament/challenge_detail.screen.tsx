import type { FC } from 'react';
import React from 'react';

import type { ChallengeDetailScreenProps } from '~/components/screen/ChallengeDetail';
import { ChallengeDetailScreen as Screen } from '~/components/screen/ChallengeDetail';

export const ChallengeDetailScreen: FC<ChallengeDetailScreenProps> = (props) => {
  return <Screen {...props} />;
};
