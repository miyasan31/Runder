import type { FC } from 'react';
import React from 'react';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { ProfileScreenProps } from '~/types';

export type ContactScreenProps = ProfileScreenProps<'ContactScreen'>;

export const Contact: FC<ContactScreenProps> = () => {
  return (
    <View>
      <Text>ContactScreen</Text>
    </View>
  );
};
