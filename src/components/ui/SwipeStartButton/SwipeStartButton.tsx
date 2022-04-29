/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-nocheck
import { useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import SwipeButton from 'rn-swipe-button';

import { RunderMonochrome, Start } from '~/components/ui/Icon';
import { View } from '~/components/ui/View';
import { useTheme } from '~/hooks/useTheme';
import { saveSecureStore } from '~/utils/secureStore';

const Icon = (<Start />) as string;

const RunderLogo = () => (
  <View style={style.button} bg="primary" border="white">
    <RunderMonochrome />
  </View>
);

type Props = {
  tournamentId: number;
};

export const SwipeStartButton: FC<Props> = ({ tournamentId }) => {
  const navigation = useNavigation();
  const bg1 = useTheme({}, 'bg1');
  const color2 = useTheme({}, 'color2');
  const primary = useTheme({}, 'primary');

  const onStart = useCallback(async () => {
    await saveSecureStore('challenged_tournament_id', String(tournamentId));
    navigation.navigate('RunningScreen');
  }, [tournamentId, navigation]);

  return (
    <SwipeButton
      title="START"
      // eslint-disable-next-line react/jsx-no-duplicate-props
      title={Icon}
      height={70}
      containerStyles={style.container}
      thumbIconWidth={70}
      thumbIconComponent={RunderLogo}
      thumbIconStyles={style.thumb}
      thumbIconBorderColor={bg1}
      thumbIconBackgroundColor={primary}
      railBorderColor={bg1}
      railBackgroundColor={bg1}
      railFillColor={bg1}
      railFillBorderColor={bg1}
      railFillBackgroundColor={bg1}
      railStyles={style.rail}
      titleColor={color2}
      titleFontSize={34}
      titleStyles={style.title}
      onSwipeSuccess={onStart}
    />
  );
};

const style = StyleSheet.create({
  container: {
    // borderWidth: 2,
    marginBottom: 20,
  },
  thumb: {
    // borderWidth: 2,
  },
  rail: {
    // borderWidth: 2,
  },
  title: {
    fontWeight: '600',
    fontSize: 30,
    fontStyle: 'italic',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 999,
    padding: 34,
  },
});
