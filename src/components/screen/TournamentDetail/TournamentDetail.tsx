import { format } from 'date-fns';
import type { FC } from 'react';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { ActivityIndicator } from '~/components/ui/Progress';
import { ExceptionText, Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { termCheck } from '~/functions/termCheck';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import type { TournamentScreenProps as Props } from '~/types';
import type { Tournament } from '~/types/model';

import { DetailViewButtonGroup } from './DetailViewButtonGroup';

export type TournamentDetailScreenProps = Props<'TournamentDetailScreen'>;

const FROM = 'tournament';
const COLUMN = 'id, name, distance, start, end, image, term';
const EQUAL = 'id';

export const TournamentDetail: FC<TournamentDetailScreenProps> = (props) => {
  const { tournament_id } = props.route.params;
  const filter = useSupabaseFilter((query) => query.select(COLUMN).eq(EQUAL, tournament_id), []);
  const { loading, error, data } = useSupabaseSelect<Tournament>(FROM, { filter });

  if (loading) return <ActivityIndicator message="大会情報を取得中..." />;
  if (error) return <ExceptionText label="エラーが発生しました。" error={error.message} />;
  if (!data) return <ExceptionText label="大会情報が見つかりませんでした。" />;

  const { id, name, distance, start, end, image, term } = data[0];
  const termResult = termCheck(term);
  const startDate = format(new Date(start), 'M/d');
  const endDate = format(new Date(end), 'M/d');

  return (
    <>
      <Image source={{ uri: image }} style={style.image} />

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
        <Button
          label="START"
          bg="bg2"
          isBorder
          outlineStyle={style.button_outline}
          textStyle={style.button_text}
        />
        <DetailViewButtonGroup id={id} />
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
