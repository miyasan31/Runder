import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { VFC } from 'react';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { BounceableView } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

type Props = {
  isFloating?: true;
};

export const GoBackButton: VFC<Props> = memo(({ isFloating }) => {
  const icon = useThemeColor({}, 'icon');
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <BounceableView
      bgStyle={[style.button, isFloating && style.float]}
      activeScale={0.9}
      onPress={onGoBack}
    >
      <MaterialIcons name="keyboard-arrow-left" size={40} color={icon} />
    </BounceableView>
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
