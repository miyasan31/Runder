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
    <Card onPress={onNavigation} outlineStyle={style.card_outline}>
      <View style={style.root}>
        <View style={style.image_box}>
          <Image source={require('assets/develop/tournament.jpeg')} style={style.image} />
          <View style={style.float_text_box}>
            <Text style={style.tournament_season} color="white">
              Monthly
            </Text>
            <Text style={style.tournament_season} color="white">
              1/1 - 1/31
            </Text>
            <Text style={style.tournament_name} color="white">
              {name}
            </Text>
            <Text style={style.tournament_distance} color="white">
              {distance}m
            </Text>
          </View>
        </View>

        <View style={style.challenge_info_box}>
          <View style={style.align_horizontal}>
            <Text style={style.info_label_left}>あなたのベストタイム</Text>
            <Text style={style.info_label_right}>チャレンジできる残り回数</Text>
          </View>

          <View style={style.align_horizontal}>
            <Text style={style.info_result_left}>10:00.00</Text>
            <Text style={style.info_result_right}>10</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  card_outline: {
    marginBottom: '6%',
  },
  root: {
    borderRadius: 20,
  },
  image_box: {
    position: 'relative',
    borderRadius: 20,
  },
  image: {
    height: 180,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  float_text_box: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  tournament_season: {
    fontSize: 15,
    fontWeight: '600',
  },
  tournament_name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  tournament_distance: {
    fontSize: 30,
    fontWeight: '800',
  },
  challenge_info_box: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  align_horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_label_left: {
    width: '50%',
    fontSize: 12,
    lineHeight: 18,
  },
  info_label_right: {
    width: '50%',
    fontSize: 12,
    textAlign: 'right',
    lineHeight: 18,
  },
  info_result_left: {
    width: '50%',
    fontSize: 30,
    fontWeight: '800',
  },
  info_result_right: {
    width: '50%',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'right',
  },
});
