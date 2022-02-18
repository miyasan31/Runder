import type { VFC } from 'react';
import React from 'react';

import type { TournamentScreenProps } from '~/components/screen/Tournament';
import { TournamentScreen as Screen } from '~/components/screen/Tournament';

export const TournamentScreen: VFC<TournamentScreenProps> = (props) => {
  return <Screen {...props} />;
};
