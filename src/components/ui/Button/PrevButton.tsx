import type { VFC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { AntDesignIcon } from '~/components/ui/Icon';
import { Bounceable } from '~/components/ui/View';

type PrevProps = {
  onPress: () => void;
  type: 'close' | 'left';
};

export const PrevButton: VFC<PrevProps> = memo(({ onPress, type = 'left' }) => {
  return (
    <Bounceable activeScale={0.8} viewStyle={style.bounceable_view} onPress={onPress}>
      <AntDesignIcon name={type} size={24} icon="icon" />
    </Bounceable>
  );
});

const style = StyleSheet.create({
  bounceable_view: {
    width: 'auto',
  },
  icon: {
    marginTop: 0,
  },
});
