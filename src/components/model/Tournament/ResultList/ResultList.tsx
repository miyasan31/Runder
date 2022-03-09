import type { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';

const data = [
  {
    id: '1',
    name: 'Winter Distance Challenge',
    distance: 3000,
    start: '12/1',
    end: '12/31',
    created_at: '2020-01-01',
    image: './assets/develop/tournament.jpeg',
  },
];

type Tournament = typeof data[0];

export const ResultList: FC<Tournament> = ({ name, distance, start, end }) => {
  const border = useThemeColor({}, 'border');
  return (
    <View style={[style.root, { borderColor: border }]}>
      <Text>
        {start} ~ {end}
      </Text>
      <Text>{name}</Text>
      <Text>{distance}m</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    paddingVertical: '4%',
  },
});
