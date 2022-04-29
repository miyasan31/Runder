import { format } from 'date-fns';
import type { FC } from 'react';
import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

import { DetailViewButtonGroup } from '~/components/screen/TournamentDetail/DetailViewButtonGroup';
import { ActivityIndicator } from '~/components/ui/Progress';
import { SwipeStartButton } from '~/components/ui/SwipeStartButton';
import { ExceptionText, Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { termCheck } from '~/functions/termCheck';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import type { Tournament } from '~/types/model';

import type { ChallengeDetailScreenProps } from '.';

export const TournamentDetail: FC<ChallengeDetailScreenProps> = memo((props) => {
  const { tournament_id } = props.route.params;
  const filter = useSupabaseFilter(
    (query) =>
      query
        .select('id, name, distance, start, end, term, tournament_design(image_full)')
        .eq('id', tournament_id),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<Tournament>('tournament', { filter });

  if (loading) return <ActivityIndicator message="大会情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="大会情報が見つかりませんでした。" />;

  const { id, name, distance, start, end, tournament_design, term } = data[0];
  const termResult = termCheck(term);
  const startDate = format(new Date(start), 'M/d');
  const endDate = format(new Date(end), 'M/d');

  return (
    <>
      <Image source={{ uri: tournament_design[0].image_full }} style={style.image} />

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

        <Text style={style.description} color="white">
          ボタンを押してから5秒後にスタートします。 スタート後の一時停止はできません。
          STARTボタンを押すと、ルールに従うものと されます。
        </Text>
      </View>

      <View style={style.float_button_box}>
        <SwipeStartButton />
        <DetailViewButtonGroup id={id} />
      </View>
    </>
  );
});

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  float_text_box: {
    position: 'absolute',
    width: '100%',
    padding: '6%',
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
  description: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
  },
  float_button_box: {
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: '6%',
  },
});
