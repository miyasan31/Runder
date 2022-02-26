import type { FC } from 'react';
import React from 'react';

import type { TournamentScreenProps } from '~/components/screen/Tournament';
import { TournamentScreen as Screen } from '~/components/screen/Tournament';

export const TournamentScreen: FC<TournamentScreenProps> = (props) => {
  return <Screen {...props} />;
};
