import type { FC } from 'react';
import React from 'react';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { ProfileScreenProps } from '~/types';

export type SettingScreenProps = ProfileScreenProps<'SettingScreen'>;

export const Setting: FC<SettingScreenProps> = () => {
  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  );
};
