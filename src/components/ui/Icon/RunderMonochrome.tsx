import type { FC } from 'react';
import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { useTheme } from '~/hooks/useTheme';

export const RunderMonochrome: FC = () => {
  const color = useTheme({}, 'color1');

  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 310 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_545_10812)">
        <Path
          d="M271 119.59L10.3901 187.31L7.12012 168.91L269 109.37L271 119.59ZM272.2 125.91L12.4101 198.69L15.6801 217.14L274.1 136.14L272.2 125.91ZM275.36 142.46L17.7601 228.56L21.0001 247.06L277.27 152.71L275.36 142.46Z"
          fill={color}
        />
        <Path
          d="M100.58 217.65L270.58 306.31L279 318L101.36 229.77L100.58 217.65ZM102.82 252.43L293.64 338.3L284.45 325.55L101.89 237.94L102.82 252.43ZM104.6 279.92L309.65 360.51L299.58 346.51L103.46 262.28L104.6 279.92Z"
          fill={color}
        />
        <Path
          d="M252.78 113.06L87.95 21.96L88.98 37.82L239.74 116.03L252.78 113.06Z"
          fill={color}
        />
        <Path
          d="M89.6799 48.6699L90.9399 68.2799L210.82 122.6L230.06 118.23L89.6799 48.6699Z"
          fill={color}
        />
        <Path
          d="M259.58 111.52L269 109.37L270.61 117.82L269 109.37L86.54 0L87.38 13.09L259.58 111.52Z"
          fill={color}
        />
        <Path d="M46.16 160.04L24.59 19.3701L0 27.0601L26.12 164.59L46.16 160.04Z" fill={color} />
        <Path d="M73.54 153.81L58.42 8.79004L38.29 15.09L57.27 157.51L73.54 153.81Z" fill={color} />
        <Path d="M96.13 148.68L86.54 0L69.75 5.25L82.66 151.74L96.13 148.68Z" fill={color} />
        <Path
          d="M88.8601 222.08L101.38 364.14L109.23 351.69L100.59 217.76L88.8601 222.08Z"
          fill={color}
        />
        <Path
          d="M40.4299 239.91L72.6699 409.67L82.1299 394.67L57.4399 233.64L40.4299 239.91Z"
          fill={color}
        />
        <Path d="M66.95 230.14L87.7 385.83L96.3 372.19L80.96 224.99L66.95 230.14Z" fill={color} />
      </G>
      <Defs>
        <ClipPath id="clip0_545_10812">
          <Rect width="309.65" height="409.67" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
