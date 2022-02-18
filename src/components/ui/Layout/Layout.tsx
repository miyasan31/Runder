import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import type { ReactNode, VFC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { View } from '~/components/ui/View';
import type { ViewStyleProps } from '~/types/style';

type LayoutProps = ViewStyleProps & {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({
  // 基本的に使用しない
  lightBg,
  darkBg,
  // custome theme
  bgTheme = 'bg2',
  // ViewProps
  bgStyle,
  children,
}) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <KeyboardAvoiding>
      <View
        style={[defaultStyle.full, bgStyle, { marginBottom: tabBarHeight || 0 }]}
        {...{ lightBg, darkBg, bgTheme }}
      >
        {children}
      </View>
    </KeyboardAvoiding>
  );
};

const defaultStyle = StyleSheet.create({
  full: {
    flex: 1,
  },
});
