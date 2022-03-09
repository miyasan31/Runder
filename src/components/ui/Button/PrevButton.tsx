import type { VFC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { FeatherIcon } from '~/components/ui/Icon';
import { Bounceable } from '~/components/ui/View';
import { useTheme } from '~/hooks/useTheme';

type PrevProps = {
  onPress: () => void;
};

export const PrevButton: VFC<PrevProps> = memo(({ onPress }) => {
  const icon = useTheme({}, 'icon');

  return (
    <Bounceable activeScale={0.8} viewStyle={style.bounceable_view} onPress={onPress}>
      <FeatherIcon name="chevron-left" size={30} color={icon} />
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
