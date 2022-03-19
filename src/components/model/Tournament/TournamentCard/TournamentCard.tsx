import { format } from 'date-fns';
import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';

import type { TournamentScreenProps } from '~/components/screen/Tournament';
import { Button } from '~/components/ui/Button';
import { Card } from '~/components/ui/Card';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { termCheck } from '~/functions/termCheck';
import type { Tournament } from '~/types/model';

type SelectColumn = 'id' | 'name' | 'distance' | 'start' | 'end' | 'image' | 'term';

export const TournamentCard: FC<Pick<Tournament, SelectColumn> & TournamentScreenProps> = ({
  id,
  name,
  distance,
  start,
  end,
  image,
  term,
  navigation,
}) => {
  const termResult = termCheck(term);
  const startDate = format(new Date(start), 'M/d');
  const endDate = format(new Date(end), 'M/d');

  const onNavigation = useCallback(() => {
    navigation.navigate('TournamentDetailScreen', { tournament_id: id });
  }, [navigation, id]);

  return (
    <Card onPress={onNavigation}>
      <View style={style.root}>
        <View style={style.image_box}>
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
          </View>

          <Button
            label="詳細"
            isBorder
            activeOpacity={1}
            // style={style.floatButtonArea}
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
            onPress={onNavigation}
          />
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
    height: 350,
    width: '100%',
    // borderRadius: 20,
  },
  float_text_box: {
    position: 'absolute',
    height: 350,
    padding: '4%',
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
  button_outline: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    display: 'flex',
    justifyContent: 'flex-start',
    width: 90,
  },
  button_bg: {
    paddingVertical: 12,
  },
  button_text: {
    fontSize: 15,
  },
});
