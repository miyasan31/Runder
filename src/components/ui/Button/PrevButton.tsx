import { MaterialIcons } from '@expo/vector-icons';
import type { VFC } from 'react';
import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { Bounceable } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { TournamentScreenProps, TournamentStackParamList } from '~/types';

type PrevProps = TournamentScreenProps<keyof TournamentStackParamList> & {
  screen: 'TournamentScreen';
};

export const PrevButton: VFC<PrevProps> = memo(({ screen, navigation }) => {
  const icon = useThemeColor({}, 'icon');

  const onPrevScreen = useCallback(() => {
    navigation.navigate(screen);
  }, [navigation, screen]);

  return (
    <Bounceable activeScale={0.9} viewStyle={style.bounceable_view} onPress={onPrevScreen}>
      <MaterialIcons name="keyboard-arrow-left" size={40} color={icon} />
    </Bounceable>
  );
});

const style = StyleSheet.create({
  bounceable_view: {
    width: 'auto',
  },
});
