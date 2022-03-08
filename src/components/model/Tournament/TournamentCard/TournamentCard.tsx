import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';

import type { TournamentScreenProps } from '~/components/screen/Tournament';
import { Button } from '~/components/ui/Button';
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

export const TournamentCard: FC<Tournament & TournamentScreenProps> = ({
  id: _id,
  name,
  distance,
  created_at: _created_at,
  image: _image,
  navigation,
}) => {
  const onNavigation = useCallback(() => {
    navigation.navigate('TournamentDetailScreen');
  }, [navigation]);

  return (
    <Card onPress={onNavigation}>
      <View style={style.view}>
        <View style={style.image_view}>
          <Image source={require('assets/develop/tournament.jpeg')} style={style.image} />

          <View style={style.float_text_area}>
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

          <Button
            label="詳細"
            isBorder
            activeOpacity={1}
            // style={style.floatButtonArea}
            outlineStyle={style.button_outline}
            viewStyle={style.button_bg}
            textStyle={style.button_text}
          />
        </View>
      </View>
    </Card>
  );
};

const style = StyleSheet.create({
  view: {
    borderRadius: 20,
  },
  image_view: {
    position: 'relative',
    borderRadius: 20,
  },
  image: {
    height: 450,
    width: '100%',
    borderRadius: 20,
  },
  float_text_area: {
    position: 'absolute',
    top: 15,
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
