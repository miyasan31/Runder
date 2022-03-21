import type { FC } from 'react';
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '~/hooks/useTheme';
import type { HeroIconStyle } from '~/types/style';

type Props = HeroIconStyle;

export const IdentificationIcon: FC<Props> = memo(
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
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
      </Svg>
    );
  },
);
