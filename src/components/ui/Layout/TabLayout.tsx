import type { ReactNode, VFC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, View } from '~/components/ui/View';
import type { ViewStyleProps } from '~/types/style';

type LayoutProps = ViewStyleProps & {
  children: ReactNode;
};

export const TabLayout: VFC<LayoutProps> = ({
  // 基本的に使用しない
  lightBg,
  darkBg,
  // custome theme
  bgTheme = 'bg1',
  // ViewProps
  bgStyle,
  children,
}) => {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={defaultStyle.root}
      {...{ lightBg, darkBg, bgTheme, bgStyle }}
    >
      <View style={defaultStyle.root}>{children}</View>
    </SafeAreaView>
  );
};

const defaultStyle = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
});
