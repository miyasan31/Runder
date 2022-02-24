import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { VFC } from 'react';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Bounceable } from 'rn-bounceable';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

type Props = {
  isFloating?: true;
};

export const GoBackButton: VFC<Props> = memo(({ isFloating }) => {
  const navigation = useNavigation();
  const icon = useThemeColor({}, 'icon');

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={[style.button, isFloating && style.float]}>
      <Bounceable onPress={onGoBack} activeScale={0.9}>
        <MaterialIcons name="keyboard-arrow-left" size={35} color={icon} />
      </Bounceable>
    </View>
  );
});

const style = StyleSheet.create({
  button: {
    width: 'auto',
  },
  float: {
    position: 'absolute',
    top: 5,
    left: '3%',
  },
});
