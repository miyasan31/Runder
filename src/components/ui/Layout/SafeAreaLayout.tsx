import type { FC, ReactNode } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, View } from '~/components/ui/View';
import type { ViewStyleProps } from '~/types/style';

type LayoutProps = ViewStyleProps & {
  children: ReactNode;
  isCenter?: true;
};

export const SafeAreaLayout: FC<LayoutProps> = ({
  // 基本的に使用しない
  lightBg,
  darkBg,
  // custom theme
  bg = 'bg1',
  // ViewProps
  bgStyle,
  children,
  isCenter,
}) => {
  return (
    <SafeAreaView {...{ lightBg, darkBg, bg, bgStyle }}>
      <View style={[defaultStyle.root, isCenter && defaultStyle.center]}>{children}</View>
    </SafeAreaView>
  );
};

const defaultStyle = StyleSheet.create({
  root: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
