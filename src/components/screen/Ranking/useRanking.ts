import 'react-native-url-polyfill/auto';

import type { PostgrestError } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { user } from '~/stores/user';
import type { Point } from '~/types/model';
import { supabaseSelect } from '~/utils/supabase';

export type Ranking = {
  totalRanking?: number;
};

export type ChallengeTournamentResult = {
  loading: boolean;
  error?: PostgrestError;
  data?: {
    totalPoint?: number;
    totalRanking?: number;
    monthlyPoint?: number;
    monthlyRanking?: number;
  };
};

const thisDate = new Date();
const thisYear = thisDate.getFullYear();
const thisMonth = thisDate.getMonth() + 1;
const thisDay = thisDate.getDate();

export const useRanking = () => {
  const userInfo = useRecoilValue(user);

  const [challenges, setChallenges] = useState<ChallengeTournamentResult>({
    loading: true,
    error: undefined,
    data: {
      totalPoint: undefined,
      totalRanking: undefined,
      monthlyPoint: undefined,
      monthlyRanking: undefined,
    },
  });

  const fetchTotalPoint = useCallback(async () => {
    const { data: total_point, error } = await supabaseSelect<Point>('point', {
      columns: 'id, point_table(later_point)',
      filter: (query) => query.eq('user_id', userInfo.id),
    });

    if (error || !total_point) {
      setChallenges({ loading: false, error: error, data: undefined });
    }

    return total_point?.reduce((acc, cur) => acc + cur.point_table.later_point, 0);
  }, [userInfo.id]);

  const fetchMonthlyPoint = useCallback(async () => {
    const { data: monthly_point, error } = await supabaseSelect<Point>('point', {
      columns: 'id, created_at, point_table(later_point)',
      filter: (query) =>
        query
          .eq('user_id', userInfo.id)
          .gte('created_at', `${thisYear}-${thisMonth}-01T06:00:00Z`)
          .lte('created_at', `${thisYear}-${thisMonth}-${thisDay}T23:30:00Z`),
    });

    if (error || !monthly_point) {
      setChallenges({ loading: false, error: error, data: undefined });
    }
    return monthly_point?.reduce((acc, cur) => acc + cur.point_table.later_point, 0);
  }, [userInfo.id]);

  useEffect(() => {
    (async () => {
      const totalPointPromise = fetchTotalPoint();
      const monthlyPointPromise = fetchMonthlyPoint();

      const [totalPoint, monthlyPoint] = await Promise.all([
        totalPointPromise,
        monthlyPointPromise,
      ]);

      setChallenges({
        loading: false,
        error: undefined,
        data: {
          totalRanking: 0,
          totalPoint,
          monthlyRanking: 0,
          monthlyPoint,
        },
      });
    })();
  }, [fetchTotalPoint, fetchMonthlyPoint]);

  return { ...challenges };
};
