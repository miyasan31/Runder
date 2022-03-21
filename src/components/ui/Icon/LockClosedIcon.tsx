import type { FC } from 'react';
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '~/hooks/useTheme';
import type { HeroIconStyle } from '~/types/style';

type Props = HeroIconStyle;

export const LockClosedIcon: FC<Props> = memo(
  ({ icon = 'icon1', lightIcon, darkIcon, size = 24 }) => {
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </Svg>
    );
  },
);
