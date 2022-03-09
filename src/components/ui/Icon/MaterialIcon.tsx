import { MaterialIcons } from '@expo/vector-icons';
import type { ComponentProps, FC } from 'react';
import React, { memo } from 'react';

import { useTheme } from '~/hooks/useTheme';

type Props = {
  name: ComponentProps<typeof MaterialIcons>['name'];
  size?: ComponentProps<typeof MaterialIcons>['size'];
};

export const MaterialIcon: FC<Props> = memo(({ size = 22, ...otherProps }) => {
  const icon = useTheme({}, 'icon');
  return <MaterialIcons {...otherProps} size={size} color={icon} />;
});
