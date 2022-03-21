import type { FC } from 'react';
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '~/hooks/useTheme';
import type { HeroIconStyle } from '~/types/style';

type Props = HeroIconStyle;

export const BellIcon: FC<Props> = memo(({ icon = 'icon1', lightIcon, darkIcon, size = 24 }) => {
  const iconColor = useTheme({ light: lightIcon, dark: darkIcon }, icon);

  return (
    <Svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={iconColor}
      strokeWidth={1.5}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </Svg>
  );
});
