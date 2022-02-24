import type { VFC } from 'react';
import React, { memo } from 'react';
import type { StyleProp } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { OutlineStyle } from '~/types/style';

type Props = {
  label?: string;
  style?: StyleProp<OutlineStyle>;
};

export const Divider: VFC<Props> = memo(({ label = 'または', style }) => {
  const borderColor = useThemeColor({}, 'border');

  return (
    <View style={[defaultStyle.container, style]}>
      <View style={[defaultStyle.divider, { borderColor }]} />
      <Text style={defaultStyle.dividerText} textTheme="text2">
        {label}
      </Text>
      <View style={[defaultStyle.divider, { borderColor }]} />
    </View>
  );
});

const defaultStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    borderTopWidth: 1,
    height: 0,
  },
  dividerText: {
    width: 'auto',
    fontSize: 16,
    marginHorizontal: '3%',
  },
});