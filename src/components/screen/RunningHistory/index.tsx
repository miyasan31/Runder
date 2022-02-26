import 'react-native-url-polyfill/auto';

import { format } from 'date-fns';
import type { FC } from 'react';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Card } from '~/components/ui/Card';
import { Layout } from '~/components/ui/Layout';
import { Progress } from '~/components/ui/Progress';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSupabaseFilter, useSupabaseSelect } from '~/hooks/supabase';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { DevListScreenProps } from '~/types';
import type { Location } from '~/types/fetcher';

const SELECT_COLUMN = 'id, created_at';
type LocationList = Pick<Location, 'id' | 'created_at'>;

export type Props = DevListScreenProps<'RunningHistoryScreen'>;

export const RunningHistory: FC<Props> = (props) => {
  const color = useThemeColor({}, 'text2');
  const filter = useSupabaseFilter(
    (query) =>
      query.select(SELECT_COLUMN).order('created_at', {
        ascending: false,
      }),
    [],
  );
  const { loading, error, data } = useSupabaseSelect<LocationList>('location', {
    filter,
  });

  if (loading) return <Progress />;
  if (error) return <Text>エラー</Text>;
  if (!data) return <Text>データなし</Text>;
  return (
    <Layout layout="tabheader-bottomtab">
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item, _) => String(item.id)} />
    </Layout>
  );

  // eslint-disable-next-line func-style
  function renderItem({ item }: { item: LocationList }) {
    const date = format(new Date(item.created_at), 'yyyy年M月d日');
    const onNavigation = () => {
      props.navigation.navigate('RunningDetailScreen', {
        id: item.id,
      });
    };
    return (
      <Card bgStyle={styles.list} onPress={onNavigation}>
        <View>
          <Text style={styles.shopName}>レコード {item.id}</Text>
          <Text style={styles.date} lightColor={color} darkText={color}>
            {date}
          </Text>
        </View>
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 15,
    marginHorizontal: '1%',

    borderBottomWidth: 1,
    borderBottomColor: '#88888833',
  },
  shopName: {
    paddingBottom: 10,

    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
  },
  date: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
  },
});
