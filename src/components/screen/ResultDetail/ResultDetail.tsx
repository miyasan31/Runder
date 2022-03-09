import type { FC } from 'react';
import React from 'react';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

import type { ResultDetailScreenProps } from './ScreenProps';

export const ResultDetail: FC<ResultDetailScreenProps> = () => {
  return (
    <View>
      <Text>ResultDetail</Text>
    </View>
  );
};
