import type { FC, ReactNode } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView, View } from '~/components/ui/View';
import type { CustomViewStyleProps } from '~/types/style';

type FullScreenLayoutProps = CustomViewStyleProps & {
  children: ReactNode;
  isCenter?: true;
};

export const FullScreenLayout: FC<FullScreenLayoutProps> = ({
  // theme
  bg = 'bg1',
  lightBg,
  darkBg,
  // FullScreenLayoutProps
  children,
  isCenter,
  viewStyle,
}) => {
  return (
    <SafeAreaView {...{ lightBg, darkBg, bg, viewStyle }}>
      <View style={[style.root, isCenter && style.center]}>{children}</View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: '6%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
