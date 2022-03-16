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
    <Card onPress={onNavigation}>
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
            <Text style={style.info_label_left} color="color2">
              あなたのベストタイム
            </Text>
            <Text style={style.info_label_right} color="color2">
              チャレンジできる残り回数
            </Text>
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
  root: {
    // borderRadius: 20,
  },
  image_box: {
    position: 'relative',
    // borderRadius: 20,
  },
  image: {
    height: 180,
    width: '100%',
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
  float_text_box: {
    position: 'absolute',
    justifyContent: 'center',
    height: 180,
    paddingLeft: '4%',
  },
  tournament_season: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  tournament_name: {
    marginVertical: '2%',
    fontSize: 22,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  tournament_distance: {
    fontSize: 34,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  challenge_info_box: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },

  align_horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_label_left: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
  },
  info_label_right: {
    flex: 1,
    fontSize: 12,
    textAlign: 'right',
    lineHeight: 18,
  },
  info_result_left: {
    flex: 1,
    fontSize: 28,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  info_result_right: {
    flex: 1,
    fontSize: 28,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
