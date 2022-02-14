import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import type { ReactNode, VFC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAvoiding } from '~/components/functional/KeyboardAvoiding';
import { SafeAreaView, View } from '~/components/ui/View';
import type { ViewStyleProps } from '~/types/style';

type LayoutProps = ViewStyleProps & {
  children: ReactNode;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
};

export const SafeAreaLayout: VFC<LayoutProps> = ({
  // 基本的に使用しない
  lightBg,
  darkBg,
  // custome theme
  bgTheme = 'bg1',
  // ViewProps
  bgStyle,
  edges = ['top', 'bottom', 'left', 'right'],
  children,
}) => {
  return (
    <SafeAreaView style={defaultStyle.root} {...{ lightBg, darkBg, bgTheme, bgStyle, edges }}>
      <View style={defaultStyle.root}>
        <KeyboardAvoiding>
          <ExpoStatusBar style="auto" />
          {children}
        </KeyboardAvoiding>
      </View>
    </SafeAreaView>
  );
};

const defaultStyle = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
});
