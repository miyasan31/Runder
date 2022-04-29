import { format } from 'date-fns';
import type { FC } from 'react';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import type { ResultScreenProps } from '~/components/screen/Result';
import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { formatRecord } from '~/functions/formatRecord';
import type { Record } from '~/types/model';

export const ResultTableBody: FC<Record & ResultScreenProps> = ({
  record,
  tournament: { id, name, distance, start, end, term, tournament_design },
  navigation,
}) => {
  const startDate = format(new Date(start), 'M/d');
  const endDate = format(new Date(end), 'M/d');
  const recordResult = formatRecord(record);

  const onNavigation = useCallback(() => {
    navigation.navigate('ResultDetailScreen', {
      tournament_id: id,
      tournament_name: name,
      tournament_image_semi: tournament_design[0].image_semi,
      tournament_start: startDate,
      tournament_end: endDate,
      tournament_term: term,
      tournament_distance: distance,
      best_record: recordResult,
    });
  }, []);

  return (
    <List viewStyle={style.root} onPress={onNavigation}>
      <View style={style.td_left}>
        <Text style={style.tournament_info} color="color2">
          {startDate} ~ {endDate}
        </Text>
        <Text style={style.tournament_info} color="color2">
          {name}
        </Text>
        <Text style={style.tournament_info} color="color2">
          {distance}m
        </Text>
      </View>

      <View style={style.td_right}>
        <Text style={style.tournament_result}>0位</Text>
        <Text style={style.tournament_result}>{recordResult}</Text>
        <Text style={style.tournament_result}>0ポイント</Text>
      </View>
    </List>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
  },
  td_left: {
    flex: 2,
    justifyContent: 'center',
  },
  tournament_info: {
    padding: '1%',
    fontStyle: 'italic',
  },
  td_right: {
    flex: 1,
    justifyContent: 'center',
  },
  tournament_result: {
    padding: '2%',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
