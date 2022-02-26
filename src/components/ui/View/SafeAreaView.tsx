import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import type { NativeSafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView as NativeSafeAreaView } from 'react-native-safe-area-context';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { ViewStyleProps } from '~/types/style';

export type SafeAreaViewProps = NativeSafeAreaViewProps & ViewStyleProps;

export const SafeAreaView: FC<SafeAreaViewProps> = memo(
  ({
    // 基本的に使用しない
    lightBg: light,
    darkBg: dark,
    // custom theme
    bg = 'bg0',
    // ViewProps
    style,
    bgStyle,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bg);

    return (
      <NativeSafeAreaView
        style={[defaultStyle.bg, style, bgStyle, { backgroundColor }]}
        {...otherProps}
      />
    );
  },
);

const defaultStyle = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
