import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, View } from '~/components/ui/View';
import type { CustomViewStyleProps } from '~/types/style';

type BottomTabLayoutProps = CustomViewStyleProps & {
  children: ReactNode;
  isCenter?: true;
  layout: 'top-horizontal' | 'horizontal' | 'top-horizontal';
};

type Edges = ('top' | 'bottom' | 'left' | 'right')[];

export const BottomTabLayout: FC<BottomTabLayoutProps> = ({
  // theme
  bg = 'bg1',
  lightBg,
  darkBg,
  // BottomTabLayoutProps
  children,
  layout,
  isCenter,
  viewStyle,
}) => {
  const tabBarHeight = useBottomTabBarHeight();

  const edges: Edges = useMemo(() => {
    switch (layout) {
      case 'top-horizontal':
        return ['top', 'left', 'right'];
      case 'horizontal':
        return ['left', 'right'];
      default:
        return ['top', 'bottom', 'left', 'right'];
    }
  }, [layout]);

  return (
    <SafeAreaView {...{ edges, lightBg, darkBg, bg, viewStyle }}>
      <View style={[style.root, isCenter && style.center, { marginBottom: tabBarHeight || 0 }]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
