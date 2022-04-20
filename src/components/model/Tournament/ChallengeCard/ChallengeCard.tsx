import { format } from 'date-fns';
import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';

import type { TournamentScreenProps } from '~/components/screen/Tournament';
import { Card } from '~/components/ui/Card';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { formatRecord } from '~/functions/formatRecord';
import { termCheck } from '~/functions/termCheck';
import type { Record, Tournament } from '~/types/model';

type ChallengeTournamentList = {
  tournament: Tournament;
  count: number;
  record: Record;
};

export const ChallengeCard: FC<ChallengeTournamentList & TournamentScreenProps> = ({
  tournament: {
    id: tournament_id,
    name,
    distance,
    start,
    end,
    tournament_design,
    term,
    count: tournament_count,
  },
  record: { record },
  count,
  navigation,
}) => {
  const termResult = termCheck(term);
  const startDate = format(new Date(start), 'M/d');
  const endDate = format(new Date(end), 'M/d');
  const recordResult = formatRecord(record);

  const onNavigation = useCallback(() => {
    navigation.navigate('ChallengeDetailScreen', { tournament_id });
  }, [navigation, tournament_id]);

  if (tournament_count - count < 0) {
    return null;
  }

  return (
    <Card onPress={onNavigation}>
      <View style={style.root}>
        <View style={style.image_box}>
          <Image source={{ uri: tournament_design[0].image_semi }} style={style.image} />

          <View style={style.float_text_box}>
            <Text style={style.season} color="white">
              {termResult}
            </Text>
            <Text style={style.season} color="white">
              {`${startDate} - ${endDate}`}
            </Text>
            <Text style={style.name} color="white">
              {name}
            </Text>
            <View style={style.distance_box}>
              <Text style={style.distance} color="white">
                {distance}
              </Text>
              <Text style={style.distance_unit} color="white">
                m
              </Text>
            </View>
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
            <Text style={style.info_result_left}>{recordResult}</Text>
            <Text style={style.info_result_right}>{tournament_count - count}</Text>
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
  season: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
    lineHeight: 24,
  },
  name: {
    marginVertical: '2%',
    fontSize: 24,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  distance_box: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  distance: {
    width: 'auto',
    fontSize: 38,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  distance_unit: {
    width: 'auto',
    marginBottom: 4,
    marginLeft: 2,
    fontSize: 22,
    fontWeight: '600',
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
