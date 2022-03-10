import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import type { FC, ReactNode } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from '~/components/ui/View';
import type { CustomViewStyleProps } from '~/types/style';

import type { SafeArea } from './edgesLayout';
import { edgesLayout } from './edgesLayout';

type BottomTabLayoutProps = CustomViewStyleProps & {
  children: ReactNode;
  isCenter?: true;
  safeArea: SafeArea;
};

export const BottomTabLayout: FC<BottomTabLayoutProps> = ({
  // theme
  bg = 'bg1',
  lightBg,
  darkBg,
  // BottomTabLayoutProps
  children,
  safeArea,
  isCenter,
  viewStyle,
}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const edges = edgesLayout(safeArea);

  return (
    <SafeAreaView
      {...{ edges, lightBg, darkBg, bg, viewStyle }}
      style={[isCenter && style.center, { marginBottom: tabBarHeight || 0 }]}
    >
      {children}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
