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
    // theme
    bg = 'bg0',
    lightBg: light,
    darkBg: dark,
    // SafeAreaViewProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bg);

    return (
      <NativeSafeAreaView {...otherProps} style={[defaultStyle.view, style, { backgroundColor }]} />
    );
  },
);

const defaultStyle = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
