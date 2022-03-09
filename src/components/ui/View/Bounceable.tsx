import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import type { BounceableProps } from 'rn-bounceable';
import { Bounceable as NativeBounceable } from 'rn-bounceable';

import { useTheme } from '~/hooks/useTheme';
import type { CustomViewStyleProps } from '~/types/style';

type BounceableViewProps = Omit<BounceableProps, 'contentContainerStyle'> &
  CustomViewStyleProps & {
    children: ReactNode;
  };

export const Bounceable: FC<BounceableViewProps> = memo(
  ({
    // theme
    bg = 'bg0',
    lightBg,
    darkBg,
    border = 'border1',
    lightBorder,
    darkBorder,
    shadow = 'shadow',
    lightShadow,
    darkShadow,
    // BounceableViewProps
    viewStyle,
    ...otherProps
  }) => {
    const backgroundColor = useTheme({ light: lightBg, dark: darkBg }, bg);
    const borderColor = useTheme({ light: lightBorder, dark: darkBorder }, border);
    const shadowColor = useTheme({ light: lightShadow, dark: darkShadow }, shadow);

    return (
      <NativeBounceable
        {...otherProps}
        activeScale={0.97}
        contentContainerStyle={[
          defaultStyle.view,
          viewStyle,
          { backgroundColor, borderColor, shadowColor },
        ]}
      />
    );
  },
);

const defaultStyle = StyleSheet.create({
  view: {
    width: '100%',
  },
});
