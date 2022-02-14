import React from 'react';

import type { TounamentScreenProps } from '~/components/screen/Tounament';
import { Tounament } from '~/components/screen/Tounament';

export const TounamentScreen: TounamentScreenProps = (props) => {
  return <Tounament {...props} />;
};
