import type { FC } from 'react';
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '~/hooks/useTheme';
import type { HeroIconStyle } from '~/types/style';

type Props = HeroIconStyle;

export const MailIcon: FC<Props> = memo(({ icon = 'icon1', lightIcon, darkIcon, size = 24 }) => {
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
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </Svg>
  );
});
