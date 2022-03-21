import type { FC } from 'react';
import React from 'react';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { ProfileScreenProps } from '~/types';

export type ThemeScreenProps = ProfileScreenProps<'ThemeScreen'>;

export const Theme: FC<ThemeScreenProps> = () => {
  return (
    <View>
      <Text>ThemeScreen</Text>
    </View>
  );
};
