import { useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import React, { useCallback } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { ChevronLeftIcon, CogIcon, XIcon } from '~/components/ui/Icon';

import { IconButton } from './IconButton';

type Props = {
  type: 'left' | 'close' | 'setting';
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const HeaderLeftButton: FC<Props> = ({ style, type, onPress }) => {
  const navigation = useNavigation();

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <IconButton style={style} onPress={onPress || onGoBack}>
      {type === 'left' && <ChevronLeftIcon size={28} />}
      {type === 'close' && <XIcon size={28} />}
      {type === 'setting' && <CogIcon size={28} />}
    </IconButton>
  );
};
