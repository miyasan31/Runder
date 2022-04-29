import type { FC } from 'react';
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '~/hooks/useTheme';
import type { HeroIconStyle } from '~/types/style';

type Props = HeroIconStyle;

export const LightningBoltIconSolid: FC<Props> = memo(
  ({ icon = 'icon1', lightIcon, darkIcon, size = 24 }) => {
    const iconColor = useTheme({ light: lightIcon, dark: darkIcon }, icon);

    return (
      <Svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={iconColor}
        strokeWidth={1.5}
      >
        <Path
          d="M13 10V3L4 14H11L11 21L20 10L13 10Z"
          fill={iconColor}
          stroke={iconColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  },
);
