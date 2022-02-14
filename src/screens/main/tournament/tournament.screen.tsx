import React from 'react';

import type { TournamentScreenProps } from '~/components/screen/Tournament';
import { Tournament } from '~/components/screen/Tournament';

export const TournamentScreen: TournamentScreenProps = (props) => {
  return <Tournament {...props} />;
};
