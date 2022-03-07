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
    <View style={style.container} bg="bg4">
      <View style={style.thisMonth}>
        <Text style={style.thisMonthText}>
          {format(new Date(date.year, date.month), 'yyyy年M月')}
        </Text>
      </View>

      <View style={style.pagination}>
        <BounceableView viewStyle={style.iconButton} onPress={onPrevMonth}>
          <AntDesignIcon name="caretleft" />
        </BounceableView>

        <BounceableView viewStyle={style.iconButton} onPress={onNextMonth}>
          <AntDesignIcon name="caretright" />
        </BounceableView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '6%',
    paddingVertical: '4%',
  },
  thisMonth: {
    flex: 1,
  },
  thisMonthText: {
    fontSize: 25,
    fontWeight: '600',
  },
  pagination: {
    flex: 1,
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconButton: {
    width: 'auto',
    marginLeft: '3%',
  },
});