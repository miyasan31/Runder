import { format } from 'date-fns';
import type { FC } from 'react';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import type { RelationshipScreenProps } from '~/components/screen/Relationship';
import { List } from '~/components/ui/List';
import { Text } from '~/components/ui/Text';
import type { Info } from '~/types/model';

type Props = RelationshipScreenProps & Pick<Info, 'id' | 'title' | 'created_at'>;

export const NewsList: FC<Props> = ({ navigation, id, title, created_at }) => {
  const date = format(new Date(created_at || ''), 'yyyy年M月d日');
  const onNavigation = useCallback(() => {
    navigation.navigate('NewsDetailScreen', { news_id: id });
  }, []);

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
