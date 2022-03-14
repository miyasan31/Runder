import { AntDesign } from '@expo/vector-icons';
import type { ComponentProps, FC } from 'react';
import React, { memo } from 'react';

import { useTheme } from '~/hooks/useTheme';
import type { IconStyleProps } from '~/types/style';

type Props = IconStyleProps & {
  name: ComponentProps<typeof AntDesign>['name'];
  size?: ComponentProps<typeof AntDesign>['size'];
};

export const AntDesignIcon: FC<Props> = memo(
  ({ icon = 'icon', lightIcon, darkIcon, size = 22, ...otherProps }) => {
    const iconColor = useTheme({ light: lightIcon, dark: darkIcon }, icon);
    return <AntDesign {...otherProps} size={size} color={iconColor} />;
  },
);
