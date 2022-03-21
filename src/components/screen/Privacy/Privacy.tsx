import type { FC } from 'react';
import React from 'react';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { ProfileScreenProps } from '~/types';

export type PrivacyScreenProps = ProfileScreenProps<'PrivacyScreen'>;

export const Privacy: FC<PrivacyScreenProps> = () => {
  return (
    <View>
      <Text>PrivacyScreen</Text>
    </View>
  );
};
