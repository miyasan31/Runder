import { useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { ChevronLeftIcon } from '~/components/ui/Icon';
import { Bounceable } from '~/components/ui/View';

type Props = {
  isFloating?: true;
};

export const GoBackButton: FC<Props> = memo(({ isFloating }) => {
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
      <ChevronLeftIcon />
    </Bounceable>
  );
});

const style = StyleSheet.create({
  bounceable_view: {
    width: 'auto',
  },
  float: {
    position: 'absolute',
    top: '6%',
    left: '3%',
  },
});
