import type { FC } from 'react';
import React from 'react';

import type { RankingScreenProps } from '~/components/screen/Ranking';
import { RankingScreen as Screen } from '~/components/screen/Ranking';

export const RankingScreen: FC<RankingScreenProps> = (props) => {
  return <Screen {...props} />;
};
