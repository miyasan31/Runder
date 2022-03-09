import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import type { BounceableProps } from 'rn-bounceable';
import { Bounceable as NativeBounceable } from 'rn-bounceable';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { CustomViewStyleProps } from '~/types/style';

type BounceableViewProps = Omit<BounceableProps, 'contentContainerStyle'> &
  CustomViewStyleProps & {
    children: ReactNode;
  };

export const BounceableView: FC<BounceableViewProps> = memo(
  ({
    // theme
    bg = 'bg0',
    lightBg: light,
    darkBg: dark,
    // BounceableViewProps
    viewStyle,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bg);

    return (
      <NativeBounceable
        {...otherProps}
        activeScale={0.97}
        contentContainerStyle={[defaultStyle.view, viewStyle, { backgroundColor }]}
      />
    );
  },
);

const defaultStyle = StyleSheet.create({
  view: {
    width: '100%',
  },
});
