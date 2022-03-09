import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet, View as NativeView } from 'react-native';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { ViewStyleProps } from '~/types/style';

export type ViewProps = NativeView['props'] & ViewStyleProps;

export const View: FC<ViewProps> = memo(
  ({
    // theme
    bg = 'bg0',
    lightBg: light,
    darkBg: dark,
    // ViewProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bg);

    return <NativeView {...otherProps} style={[defaultStyle.view, style, { backgroundColor }]} />;
  },
);

const defaultStyle = StyleSheet.create({
  view: {
    width: '100%',
  },
});
