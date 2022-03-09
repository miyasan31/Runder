import type { FC } from 'react';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import type { ResultScreenProps } from '~/components/screen/Result';
import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';

const data = [
  {
    id: '1',
    name: 'Winter Distance Challenge',
    distance: 3000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
    rank: 1,
    record: '00:00:00',
    point: 0,
  },
];

type Tournament = typeof data[0];

export const ResultList: FC<Tournament & ResultScreenProps> = ({
  name,
  distance,
  start,
  end,
  rank,
  record,
  point,
  navigation,
}) => {
  const onNavigation = useCallback(() => {
    navigation.navigate('ResultDetailScreen');
  }, [navigation]);

  return (
    <List isBorder onPress={onNavigation}>
      <View style={style.align_horizontal}>
        <View style={style.td_left}>
          <Text style={style.tournament_info} color="color2">
            {start} ~ {end}
          </Text>
          <Text style={style.tournament_info} color="color2">
            {name}
          </Text>
          <Text style={style.tournament_info} color="color2">
            {distance}m
          </Text>
        </View>

        <View style={style.td_right}>
          <Text style={style.tournament_result}>{rank}位</Text>
          <Text style={style.tournament_result}>{record}</Text>
          <Text style={style.tournament_result}>{point}ポイント</Text>
        </View>
      </View>
    </List>
  );
};

const style = StyleSheet.create({
  align_horizontal: {
    flexDirection: 'row',
  },
  td_left: {
    flex: 2,
    justifyContent: 'center',
  },
  tournament_info: {
    padding: '1%',
    fontWeight: '500',
  },
  td_right: {
    flex: 1,
    justifyContent: 'center',
  },
  tournament_result: {
    padding: '2%',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
});
