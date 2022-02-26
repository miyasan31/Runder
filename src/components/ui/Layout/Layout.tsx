import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, View } from '~/components/ui/View';
import type { CustomViewStyleProps } from '~/types/style';

type LayoutProps = CustomViewStyleProps & {
  children: ReactNode;
  layout: 'tabheader-bottomtab' | 'header-bottomtab' | 'headerless-bottomtab';
};

type Edges = ('top' | 'bottom' | 'left' | 'right')[];

export const Layout: FC<LayoutProps> = ({
  // 基本的に使用しない
  lightBg,
  darkBg,
  // custom theme
  bg = 'bg1',
  // ViewProps
  viewStyle,
  layout,
  children,
}) => {
  const tabBarHeight = useBottomTabBarHeight();

  const edges: Edges = useMemo(() => {
    switch (layout) {
      case 'tabheader-bottomtab':
        return ['top', 'left', 'right'];
      case 'header-bottomtab':
        return ['left', 'right'];
      case 'headerless-bottomtab':
        return ['top', 'left', 'right'];
      default:
        return ['top', 'bottom', 'left', 'right'];
    }
  }, [layout]);

  return (
    <SafeAreaView {...{ edges, lightBg, darkBg, bg, viewStyle }}>
      <View style={[defaultStyle.root, { marginBottom: tabBarHeight || 0 }]}>{children}</View>
    </SafeAreaView>
  );
};

const defaultStyle = StyleSheet.create({
  root: {
    flex: 1,
  },
});
