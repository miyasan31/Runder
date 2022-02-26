import type { FC } from 'react';
import React from 'react';

import type { TournamentDetailScreenProps } from '~/components/screen/TournamentDetail';
import { TournamentDetailScreen as Screen } from '~/components/screen/TournamentDetail';

export const TournamentDetailScreen: FC<TournamentDetailScreenProps> = (props) => {
  return <Screen {...props} />;
};
