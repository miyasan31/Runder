import type { VFC } from 'react';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

import type { TournamentDetailScreenProps } from './ScreenProps';

const data = [
  {
    id: '1',
    name: 'Winter Distance Challenge',
    distance: 3000,
    created_at: '2020-01-01',
    image: 'assets/develop/tournament.jpeg',
  },
];

export const TournamentDetail: VFC<TournamentDetailScreenProps> = () => {
  return (
    <View>
      <Image source={require('assets/develop/tournament.jpeg')} style={style.image} />

      <View style={style.floatTextArea}>
        <Text style={style.season} textTheme="white">
          Monthly
        </Text>
        <Text style={style.season} textTheme="white">
          1/1 - 1/31
        </Text>
        <Text style={style.name} textTheme="white">
          {data[0].name}
        </Text>
        <Text style={style.distance} textTheme="white">
          {data[0].distance}m
        </Text>
        <Text style={style.description} textTheme="white">
          ボタンを押してから5秒後にスタートします。 スタート後の一時停止はできません。
          STARTボタンを押すと、ルールに従うものと されます。
        </Text>
      </View>

      <View style={style.floatButtonGroup}>
        <Button
          label="START"
          bgTheme="bg2"
          isBorder
          outlineStyle={style.startButtonOutline}
          textStyle={style.startButtonText}
        />
        <View style={style.buttonGroup}>
          <Button
            label="ルール"
            bgTheme="bg2"
            isBorder
            textStyle={style.buttonText}
            bgStyle={style.buttonBg}
            outlineStyle={style.buttonOutline}
          />
          <Button
            label="ポイント"
            bgTheme="bg2"
            isBorder
            outlineStyle={style.buttonOutline}
            bgStyle={style.buttonBg}
            textStyle={style.buttonText}
          />
          <Button
            label="ランキング"
            bgTheme="bg2"
            isBorder
            outlineStyle={style.buttonOutline}
            bgStyle={style.buttonBg}
            textStyle={style.buttonText}
          />
        </View>
      </View>

      <View />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  //
  floatTextArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '6%',
  },
  season: {
    fontSize: 20,
    fontWeight: '600',
  },
  name: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 10,
  },
  distance: {
    fontSize: 35,
    fontWeight: '800',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },
  //
  floatButtonGroup: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    width: '100%',
  },
  //
  startButtonOutline: {
    width: '100%',
    paddingHorizontal: '6%',
    marginBottom: '8%',
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  //
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
  },
  buttonOutline: {
    width: '30%',
  },
  buttonBg: {
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 15,
  },
});
