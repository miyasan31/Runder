import React from 'react';

import type { ContactScreenProps } from '~/components/screen/Contact';
import { Contact } from '~/components/screen/Contact';

export const ContactScreen: ContactScreenProps = (props) => {
  return <Contact {...props} />;
};
