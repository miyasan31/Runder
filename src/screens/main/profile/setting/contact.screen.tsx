import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ContactScreenProps } from '~/components/screen/Contact';
import { Contact } from '~/components/screen/Contact';
import { FullScreenLayout } from '~/components/ui/Layout';

export const ContactScreen: FC<ContactScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <Contact {...props} />
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
