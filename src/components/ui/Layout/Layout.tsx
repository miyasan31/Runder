import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import type { ReactNode, VFC } from 'react';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, View } from '~/components/ui/View';
import type { ViewStyleProps } from '~/types/style';

type LayoutProps = ViewStyleProps & {
  children: ReactNode;
  layout:
    | 'tabheader-bottomtab'
    | 'header-bottomtab'
    | 'headerless-bottomtab'
    | 'headerless-bottomtabless';
};

type Edges = ('top' | 'bottom' | 'left' | 'right')[];

export const Layout: VFC<LayoutProps> = ({
  // 基本的に使用しない
  lightBg,
  darkBg,
  // custome theme
  bgTheme = 'bg1',
  // ViewProps
  bgStyle,
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
    <SafeAreaView {...{ edges, lightBg, darkBg, bgTheme, bgStyle }}>
      <View style={[defaultStyle.root, { marginBottom: tabBarHeight || 0 }]}>{children}</View>
    </SafeAreaView>
  );
};

const defaultStyle = StyleSheet.create({
  root: {
    flex: 1,
  },
});
