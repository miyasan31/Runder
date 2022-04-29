import { format } from 'date-fns';
import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ChevronLeftIcon, ChevronRightIcon } from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { Bounceable, View } from '~/components/ui/View';

import { usePagination } from './usePagination';

export const MonthPagination: FC = () => {
  const { date, onPrevMonth, onNextMonth } = usePagination();

  return (
    <View style={style.root}>
      <View style={style.this_month_box}>
        <Text style={style.this_month_text}>
          {format(new Date(date.year, date.month), 'yyyy年M月')}
        </Text>
      </View>

      <View style={style.pagination_box}>
        <Bounceable viewStyle={style.icon_button} onPress={onPrevMonth}>
          <ChevronLeftIcon icon="icon2" />
        </Bounceable>

        <Bounceable viewStyle={style.icon_button} onPress={onNextMonth}>
          <ChevronRightIcon icon="icon2" />
        </Bounceable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '4%',
  },
  this_month_box: {
    flex: 1,
    paddingLeft: '1%',
  },
  this_month_text: {
    fontSize: 20,
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
