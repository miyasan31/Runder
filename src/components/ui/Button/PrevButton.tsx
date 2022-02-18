import { MaterialIcons } from '@expo/vector-icons';
import type { VFC } from 'react';
import React, { useCallback } from 'react';
import { Bounceable } from 'rn-bounceable';

import { useThemeColor } from '~/hooks/useThemeColor';
import type { TournamentScreenProps, TournamentStackParamList } from '~/types';

type PrevProps = TournamentScreenProps<keyof TournamentStackParamList> & {
  screen: 'TournamentScreen';
};

export const PrevButton: VFC<PrevProps> = ({ screen, navigation }) => {
  const icon = useThemeColor({}, 'icon');

  const onPrevScreen = useCallback(() => {
    navigation.navigate(screen);
  }, [navigation, screen]);

  return (
    <Bounceable onPress={onPrevScreen} activeScale={0.9}>
      <MaterialIcons name="keyboard-arrow-left" size={35} color={icon} />
    </Bounceable>
  );
};
