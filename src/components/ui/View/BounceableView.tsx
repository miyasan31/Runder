import type { FC, ReactNode } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import type { BounceableProps } from 'rn-bounceable';
import { Bounceable as NativeBounceable } from 'rn-bounceable';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { ViewStyleProps } from '~/types/style';

type Props = Omit<BounceableProps, 'contentContainerStyle'> &
  ViewStyleProps & {
    children: ReactNode;
  };

export const BounceableView: FC<Props> = ({
  // 基本的に使用しない
  // custom themeで色を指定する
  lightBg: light,
  darkBg: dark,
  // custom theme
  bg = 'bg0',
  // ViewProps
  bgStyle,
  ...otherProps
}) => {
  const backgroundColor = useThemeColor({ light, dark }, bg);

  return (
    <NativeBounceable
      contentContainerStyle={[defaultStyle.bg, bgStyle, { backgroundColor }]}
      activeScale={0.97}
      {...otherProps}
    />
  );
};

const defaultStyle = StyleSheet.create({
  bg: {
    width: '100%',
  },
});
