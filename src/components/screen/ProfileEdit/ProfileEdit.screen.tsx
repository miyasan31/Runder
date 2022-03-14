import type { FC } from 'react';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { LayoutErrorBoundary } from '~/components/functional/Error';
import { FullScreenLayout } from '~/components/ui/Layout';

import { ProfileEdit } from './ProfileEdit';
import type { ProfileEditScreenProps } from './ScreenProps';

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
