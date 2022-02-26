import type { FC } from 'react';
import React from 'react';

import type { ContactScreenProps } from '~/components/screen/Contact';
import { ContactScreen as Screen } from '~/components/screen/Contact';

export const ContactScreen: FC<ContactScreenProps> = (props) => {
  return <Screen {...props} />;
};
