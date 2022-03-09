import type { FC } from 'react';
import React, { memo } from 'react';
import type { StyleProp } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { OutlineStyle } from '~/types/style';

type Props = {
  label?: string;
  outlineStyle?: StyleProp<OutlineStyle>;
};

export const Divider: FC<Props> = memo(({ label = 'または', outlineStyle }) => {
  const borderColor = useThemeColor({}, 'border');

  return (
    <View style={[defaultStyle.root, outlineStyle]}>
      <View style={[defaultStyle.divider_border, { borderColor }]} />
      <Text style={defaultStyle.divider_text} color="color2">
        {label}
      </Text>
      <View style={[defaultStyle.divider_border, { borderColor }]} />
    </View>
  );
});

const defaultStyle = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider_border: {
    flex: 1,
    borderTopWidth: 1,
    height: 0,
  },
  divider_text: {
    width: 'auto',
    fontSize: 16,
    marginHorizontal: '3%',
  },
});
