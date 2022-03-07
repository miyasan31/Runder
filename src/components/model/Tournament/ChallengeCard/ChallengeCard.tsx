import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';

import type { TournamentScreenProps } from '~/components/screen/Tournament';
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

export const ChallengeCard: FC<Tournament & TournamentScreenProps> = ({
  id: _id,
  name,
  distance,
  created_at: _created_at,
  image: _image,
  navigation,
}) => {
  const onNavigation = useCallback(() => {
    navigation.navigate('ChallengeDetailScreen');
  }, [navigation]);

  return (
    <Card onPress={onNavigation} outlineStyle={style.cardOutline}>
      <View style={style.view}>
        <View style={style.imageView}>
          <Image source={require('assets/develop/tournament.jpeg')} style={style.image} />
          <View style={style.floatTextArea}>
            <Text style={style.season} color="white">
              Monthly
            </Text>
            <Text style={style.season} color="white">
              1/1 - 1/31
            </Text>
            <Text style={style.name} color="white">
              {name}
            </Text>
            <Text style={style.distance} color="white">
              {distance}m
            </Text>
          </View>
        </View>

        <View style={style.infoView}>
          <View style={style.row}>
            <Text style={style.infoLabelLeft}>あなたのベストタイム</Text>
            <Text style={style.infoLabelRight}>チャレンジできる残り回数</Text>
          </View>

          <View style={style.row}>
            <Text style={style.infoResultLeft}>10:00.00</Text>
            <Text style={style.infoResultRight}>10</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  cardOutline: {
    marginBottom: '6%',
  },
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
