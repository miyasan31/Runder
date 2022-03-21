import type { FC } from 'react';
import React from 'react';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { ProfileScreenProps } from '~/types';

export type AccountDeletionConfirmationScreenProps =
  ProfileScreenProps<'AccountDeletionConfirmationScreen'>;

export const AccountDeletionConfirmation: FC<AccountDeletionConfirmationScreenProps> = () => {
  return (
    <View>
      <Text>AccountDeletionConfirmationScreen</Text>
    </View>
  );
};
