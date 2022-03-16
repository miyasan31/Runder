import type { FC } from 'react';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import type { TournamentScreenProps as Props } from '~/types';

import { DetailViewButtonGroup } from './DetailViewButtonGroup';

export type TournamentDetailScreenProps = Props<'TournamentDetailScreen'>;

const data = [
  {
    id: '1',
    name: 'Winter Distance Challenge',
    distance: 3000,
    created_at: '2020-01-01',
    image: 'assets/develop/tournament.jpeg',
  },
];

export const TournamentDetail: FC<TournamentDetailScreenProps> = () => {
  return (
    <>
      <Image source={require('assets/develop/tournament.jpeg')} style={style.image} />

      <View style={style.float_text_box}>
        <Text style={style.tournament_season} color="white">
          Monthly
        </Text>
        <Text style={style.tournament_season} color="white">
          1/1 - 1/31
        </Text>
        <Text style={style.tournament_name} color="white">
          {data[0].name}
        </Text>
        <Text style={style.tournament_distance} color="white">
          {data[0].distance}m
        </Text>
        <Text style={style.tournament_description} color="white">
          ボタンを押してから5秒後にスタートします。 スタート後の一時停止はできません。
          STARTボタンを押すと、ルールに従うものと されます。
        </Text>
      </View>

      <View style={style.float_button_box}>
        <Button
          label="START"
          bg="bg2"
          isBorder
          outlineStyle={style.button_outline}
          textStyle={style.button_text}
        />
        <DetailViewButtonGroup />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  float_text_box: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '6%',
  },
  tournament_season: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  tournament_name: {
    marginVertical: '2%',
    fontSize: 24,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  tournament_distance: {
    fontSize: 36,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  tournament_description: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
  },
  float_button_box: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    width: '100%',
  },
  button_outline: {
    width: '100%',
    paddingHorizontal: '6%',
    marginBottom: '8%',
  },
  button_text: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
  },
});
