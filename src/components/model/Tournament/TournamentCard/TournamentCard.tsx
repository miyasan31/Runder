import { format } from 'date-fns';
import type { VFC } from 'react';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Card } from '~/components/ui/Card';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

const data = [
  {
    id: '1',
    name: 'Winter Distance Challenge',
    distance: 3000,
    created_at: '2020-01-01',
    image: 'assets/develop/tournament.jpeg',
  },
];

type Tournament = typeof data[0];

export const TournamentCard: VFC<Tournament> = ({ id, name, distance, created_at }) => {
  const date = format(new Date(created_at), 'yyyy年M月d日');
  const onNavigation = () => console.info('item.id', id);

  console.info(date);

  return (
    <Card onPress={onNavigation}>
      <View style={style.view}>
        <View style={style.imageView}>
          <Image source={require('assets/develop/tournament.jpeg')} style={style.image} />
          <View style={style.floatTextArea} bgTheme="bg0">
            <Text style={style.season} textTheme="white">
              Monthly
            </Text>
            <Text style={style.season} textTheme="white">
              1/1 - 1/31
            </Text>
            <Text style={style.name} textTheme="white">
              {name}
            </Text>
            <Text style={style.distance} textTheme="white">
              {distance}m
            </Text>
          </View>
        </View>

        <View style={style.infoView}>
          <View style={style.row}>
            <Text style={style.infoLabelLeft} textTheme="text2">
              あなたのベストタイム
            </Text>
            <Text style={style.infoLabelRight} textTheme="text2">
              チャレンジできる残り回数
            </Text>
          </View>

          <View style={style.row}>
            <Text style={style.infoResultLeft} textTheme="text1">
              10:00.00
            </Text>
            <Text style={style.infoResultRight} textTheme="text1">
              10
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  view: {
    borderRadius: 20,
  },
  // tournament image
  imageView: {
    position: 'relative',
    borderRadius: 20,
  },
  image: {
    height: 180,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  floatTextArea: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  season: {
    fontSize: 15,
    fontWeight: '600',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  distance: {
    fontSize: 30,
    fontWeight: '800',
  },
  // tournament info
  infoView: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoLabelLeft: {
    width: '50%',
    fontSize: 12,
    lineHeight: 18,
  },
  infoLabelRight: {
    width: '50%',
    fontSize: 12,
    textAlign: 'right',
    lineHeight: 18,
  },
  infoResultLeft: {
    width: '50%',
    fontSize: 30,
    fontWeight: '800',
  },
  infoResultRight: {
    width: '50%',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'right',
  },
});
