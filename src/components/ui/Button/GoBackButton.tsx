import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { Bounceable } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

type Props = {
  isFloating?: true;
};

export const GoBackButton: FC<Props> = memo(({ isFloating }) => {
  const icon = useThemeColor({}, 'icon');
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Bounceable
      viewStyle={[style.bounceable_view, isFloating && style.float]}
      activeScale={0.9}
      onPress={onGoBack}
    >
      <MaterialIcons name="keyboard-arrow-left" size={40} color={icon} />
    </Bounceable>
  );
});

const style = StyleSheet.create({
  bounceable_view: {
    width: 'auto',
  },
  float: {
    position: 'absolute',
    top: 5,
    left: '3%',
  },
});
