import { AntDesign } from '@expo/vector-icons';
import type { ComponentProps, FC } from 'react';
import React, { memo } from 'react';

import { useThemeColor } from '~/hooks/useThemeColor';

type Props = {
  name: ComponentProps<typeof AntDesign>['name'];
};

export const AntDesignIcon: FC<Props> = memo((props) => {
  const icon = useThemeColor({}, 'icon');

  return <AntDesign {...props} size={22} color={icon} />;
});
