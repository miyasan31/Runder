import { MaterialIcons } from '@expo/vector-icons';
import type { VFC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Bounceable } from 'rn-bounceable';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

type Props = {
  onPress: () => void;
};

export const GoBackButton: VFC<Props> = memo(({ onPress }) => {
  const icon = useThemeColor({}, 'icon');

  return (
    <View style={style.floatButton}>
      <Bounceable onPress={onPress} activeScale={0.9}>
        <MaterialIcons name="keyboard-arrow-left" size={35} color={icon} />
      </Bounceable>
    </View>
  );
});

const style = StyleSheet.create({
  floatButton: {
    position: 'absolute',
    top: 5,
    left: '3%',
    width: 'auto',
  },
});
