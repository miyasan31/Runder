import { format } from 'date-fns';
import type { FC } from 'react';
import { StyleSheet } from 'react-native';

import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';

const data = [
  { id: 1, title: 'お知らせ1 お知らせ1 お知らせ1', created_at: new Date(2020, 0, 1) },
  { id: 2, title: 'お知らせ2 お知らせ2 お知らせ2', created_at: new Date(2020, 0, 1) },
  { id: 3, title: 'お知らせ3 お知らせ3 お知らせ3', created_at: new Date(2020, 0, 1) },
  { id: 4, title: 'お知らせ4 お知らせ4 お知らせ4', created_at: new Date(2020, 0, 1) },
];

type NewsListProps = typeof data[number];

export const NewsList: FC<NewsListProps> = ({ id, title, created_at }) => {
  const date = format(new Date(created_at || ''), 'yyyy年M月d日');
  const onNavigation = () => console.info('id', id);

  return (
    <List viewStyle={style.root} onPress={onNavigation}>
      <Text color="color2">{date}</Text>
      <Text style={style.title}>{title}</Text>
    </List>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingVertical: '6%',
  },
  title: {
    marginTop: '2%',
    fontSize: 16,
    fontWeight: '600',
  },
});
