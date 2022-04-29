import type { FC } from 'react';
import React from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { NewsDetailScreenProps } from '~/components/screen/NewsDetail';
import { NewsDetail } from '~/components/screen/NewsDetail';
import { BottomTabLayout } from '~/components/ui/Layout';

export const NewsDetailScreen: FC<NewsDetailScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <BottomTabLayout safeArea="horizontal">
        <NewsDetail {...props} />
      </BottomTabLayout>
    </LayoutErrorBoundary>
  );
};
