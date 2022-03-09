import { AntDesign } from '@expo/vector-icons';
import type { ComponentProps, FC } from 'react';
import React, { memo } from 'react';

import { useTheme } from '~/hooks/useTheme';

type Props = {
  name: ComponentProps<typeof AntDesign>['name'];
};

export const AntDesignIcon: FC<Props> = memo((props) => {
  const icon = useTheme({}, 'icon');

  return <AntDesign {...props} size={22} color={icon} />;
});
