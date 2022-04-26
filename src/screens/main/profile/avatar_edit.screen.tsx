import type { FC } from 'react';
import React, { useCallback } from 'react';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { AvatarEditScreenProps } from '~/components/screen/AvatarEdit';
import { AvatarEdit } from '~/components/screen/AvatarEdit';
import { Header } from '~/components/ui/Header';
import { FullScreenLayout } from '~/components/ui/Layout';
import { Toaster } from '~/components/ui/Toaster';

export const AvatarEditScreen: FC<AvatarEditScreenProps> = (props) => {
  const onPrevScreen = useCallback(() => {
    props.navigation.goBack();
  }, []);

  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="vertical-horizontal">
        <Header title="アバター編集" onPress={onPrevScreen} />
        <AvatarEdit {...props} />
      </FullScreenLayout>
      <Toaster />
    </LayoutErrorBoundary>
  );
};
