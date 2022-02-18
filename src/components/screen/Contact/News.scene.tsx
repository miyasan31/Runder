import type { VFC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';

import { News } from './News';
import type { ContactScreenProps } from './ScreenProps';

export const NewsScene: VFC<ContactScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <News {...props} />
    </LayoutErrorBoundary>
  );
};
