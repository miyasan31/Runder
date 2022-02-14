import React from 'react';

import type { RankingScreenProps } from '~/components/screen/Ranking';
import { Ranking } from '~/components/screen/Ranking';

export const RankingScreen: RankingScreenProps = (props) => {
  return <Ranking {...props} />;
};
