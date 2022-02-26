import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import { DevOps } from './DevOps';
import type { ContactScreenProps } from './ScreenProps';

export const DevOpsScene: FC<ContactScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <DevOps {...props} />
    </LayoutErrorBoundary>
  );
};
