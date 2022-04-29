import type { FC } from 'react';
import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ProfileEditScreenProps } from '~/components/screen/ProfileEdit';
import { ProfileEdit } from '~/components/screen/ProfileEdit';
import { Header } from '~/components/ui/Header';
import { FullScreenLayout } from '~/components/ui/Layout';
import { Toaster } from '~/components/ui/Toaster';

export const ProfileEditScreen: FC<ProfileEditScreenProps> = (props) => {
  const onPrevScreen = useCallback(() => {
    props.navigation.goBack();
  }, []);

  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="vertical-horizontal">
        <KeyboardAwareScrollView extraHeight={200}>
          <Header title="プロフィール編集" onPress={onPrevScreen} />
          <ProfileEdit {...props} />
        </KeyboardAwareScrollView>
      </FullScreenLayout>
      <Toaster />
    </LayoutErrorBoundary>
  );
};
