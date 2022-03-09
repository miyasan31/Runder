import { AntDesign } from '@expo/vector-icons';
import type { ComponentProps, FC } from 'react';
import React, { memo } from 'react';

import { useTheme } from '~/hooks/useTheme';

type Props = {
  name: ComponentProps<typeof AntDesign>['name'];
  size?: ComponentProps<typeof AntDesign>['size'];
};

export const AntDesignIcon: FC<Props> = memo(({ size = 22, ...otherProps }) => {
  const icon = useTheme({}, 'icon');
  return <AntDesign {...otherProps} size={size} color={icon} />;
});
