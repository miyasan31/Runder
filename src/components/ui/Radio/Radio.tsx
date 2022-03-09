import type { Dispatch, SetStateAction } from 'react';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { TouchableOpacity, View } from '~/components/ui/View';
import type { ViewStyleProps } from '~/types/style';

type Props<T> = ViewStyleProps & {
  value: T;
  activeValue: T;
  onChangeValue?: Dispatch<SetStateAction<T>>;
};

export const Radio = <T,>({
  lightBg,
  darkBg,
  bg = 'primary',
  value,
  activeValue,
  onChangeValue,
}: Props<T>) => {
  const onPress = useCallback(() => {
    onChangeValue && onChangeValue(value);
  }, [onChangeValue, value]);

  return (
    <TouchableOpacity activeOpacity={1} style={[style.ring]} onPress={onPress}>
      {value === activeValue ? <View style={style.active} {...{ lightBg, darkBg, bg }} /> : null}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  ring: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 999,
  },
  active: {
    width: 12,
    height: 12,
    borderRadius: 999,
  },
});
