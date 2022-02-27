import { useCallback } from 'react';
import { useSnapshot } from 'valtio';

import { date } from '~/stores/date';

export const usePagination = () => {
  const snap = useSnapshot(date);

  const currentDate =
    new Date().getFullYear() !== date.year && new Date().getMonth() + 1 !== date.month;

  const onPrevMonth = useCallback(() => {
    date.year = snap.month === 1 ? snap.year - 1 : snap.year;
    date.month = snap.month === 1 ? 12 : snap.month - 1;
  }, [snap]);

  const onNextMonth = useCallback(() => {
    date.year = snap.month === 12 ? snap.year + 1 : snap.year;
    date.month = snap.month === 12 ? 1 : snap.month + 1;
  }, [snap]);

  return { date: snap, currentDate, onPrevMonth, onNextMonth };
};
