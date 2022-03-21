import type { VFC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { ChevronLeftIcon, CogIcon, XIcon } from '~/components/ui/Icon';
import { Bounceable } from '~/components/ui/View';

type PrevProps = {
  onPress: () => void;
  type?: 'close' | 'left' | 'setting';
};

export const IconButton: VFC<PrevProps> = memo(({ onPress, type = 'left' }) => {
  return (
    <Bounceable activeScale={0.8} viewStyle={style.bounceable_view} onPress={onPress}>
      {type === 'left' && <ChevronLeftIcon size={28} />}
      {type === 'close' && <XIcon size={28} />}
      {type === 'setting' && <CogIcon size={28} />}
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
