import type { FC } from 'react';
import React from 'react';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { ProfileScreenProps } from '~/types';

export type AccountDeletionScreenProps = ProfileScreenProps<'AccountDeletionScreen'>;

export const AccountDeletion: FC<AccountDeletionScreenProps> = () => {
  return (
    <View>
      <Text>AccountDeletionScreen</Text>
    </View>
  );
};
