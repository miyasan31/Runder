import { format } from 'date-fns';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { AntDesignIcon } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { BounceableView, View } from '~/components/ui/View';

import { usePagination } from './usePagination';

export const MonthPagination: FC = () => {
  const { date, onPrevMonth, onNextMonth } = usePagination();

  return (
    <View style={style.root} bg="bg4">
      <View style={style.this_month_box}>
        <Text style={style.this_month_text}>
          {format(new Date(date.year, date.month), 'yyyy年M月')}
        </Text>
      </View>

      <View style={style.pagination_box}>
        <BounceableView viewStyle={style.icon_button} onPress={onPrevMonth}>
          <AntDesignIcon name="caretleft" />
        </BounceableView>

        <BounceableView viewStyle={style.icon_button} onPress={onNextMonth}>
          <AntDesignIcon name="caretright" />
        </BounceableView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '6%',
    paddingVertical: '4%',
  },
  this_month_box: {
    flex: 1,
  },
  this_month_text: {
    fontSize: 25,
    fontWeight: '600',
  },
  pagination_box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 'auto',
  },
  icon_button: {
    width: 'auto',
    marginLeft: '3%',
  },
});
