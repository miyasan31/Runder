import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { date } from '~/stores/date';

export const usePagination = () => {
  const [dateInfo, setDateInfo] = useRecoilState(date);

  const currentDate =
    new Date().getFullYear() !== dateInfo.year && new Date().getMonth() + 1 !== dateInfo.month;

  const onPrevMonth = useCallback(() => {
    setDateInfo((prev) => {
      return {
        year: prev.month === 1 ? prev.year - 1 : prev.year,
        month: prev.month === 1 ? 12 : prev.month - 1,
      };
    });
  }, []);

  const onNextMonth = useCallback(() => {
    setDateInfo((prev) => {
      return {
        year: prev.month === 12 ? prev.year + 1 : prev.year,
        month: prev.month === 12 ? 1 : prev.month + 1,
      };
    });
  }, []);

  return { date: dateInfo, currentDate, onPrevMonth, onNextMonth };
};
