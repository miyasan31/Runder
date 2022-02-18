import type { VFC } from 'react';
import React from 'react';

import type { TournamentDetailScreenProps } from '~/components/screen/TournamentDetail';
import { TournamentDetailScreen as Screen } from '~/components/screen/TournamentDetail';

export const TournamentDetailScreen: VFC<TournamentDetailScreenProps> = (props) => {
  return <Screen {...props} />;
};
