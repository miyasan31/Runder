import type { FC } from 'react';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import type { ProfileEditScreenProps } from '~/components/screen/ProfileEdit';
import { ProfileEdit } from '~/components/screen/ProfileEdit';
import { FullScreenLayout } from '~/components/ui/Layout';

export const ProfileEditScreen: FC<ProfileEditScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <FullScreenLayout safeArea="bottom-horizontal">
        <KeyboardAwareScrollView extraHeight={200}>
          <ProfileEdit {...props} />
        </KeyboardAwareScrollView>
      </FullScreenLayout>
    </LayoutErrorBoundary>
  );
};
