import type { FC, ReactNode } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from '~/components/ui/View';
import type { CustomViewStyleProps } from '~/types/style';

import type { SafeArea } from './edgesLayout';
import { edgesLayout } from './edgesLayout';

type LayoutProps = CustomViewStyleProps & {
  children: ReactNode;
  isCenter?: true;
  safeArea?: SafeArea;
};

export const FullScreenLayout: FC<LayoutProps> = ({
  // theme
  bg = 'bg1',
  lightBg,
  darkBg,
  // LayoutProps
  isCenter = false,
  safeArea = 'vertical-horizontal',
  children,
}) => {
  const edges = edgesLayout(safeArea);

  return (
    <SafeAreaView {...{ edges, bg, lightBg, darkBg }} style={[isCenter && style.center]}>
      {children}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
