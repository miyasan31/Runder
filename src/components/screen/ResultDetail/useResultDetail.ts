import 'react-native-url-polyfill/auto';

import type { PostgrestError } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';

import type { PointTable, Record } from '~/types/model';
import { supabaseSelect } from '~/utils/supabase';

export type ResultDetail =
  | {
      best_record: Record[];
      point_table: PointTable[];
    }
  | undefined;

export type ResultDetailResponse = {
  loading: boolean;
  error?: PostgrestError;
  data?: ResultDetail;
};

export const useResultDetail = (tournament_id: number) => {
  const [resultDetail, setResultDetail] = useState<ResultDetailResponse>({
    loading: true,
    error: undefined,
    data: undefined,
  });

  const fetchResultDetail = useCallback(async () => {
    const { data: best_record, error: best_record_error } = await supabaseSelect<Record>('record', {
      filter: (query) =>
        query
          .select('id, record, user(id, name, avatar)')
          .eq('tournament_id', tournament_id)
          .eq('isBest', true)
          .order('record'),
    });

    if (best_record_error || !best_record) {
      setResultDetail({
        loading: false,
        error: best_record_error,
        data: undefined,
      });
      return;
    }

    const { data: point_table, error: point_table_error } = await supabaseSelect<PointTable>(
      'point_table',
      {
        columns: 'rank, later_point',
        filter: (query) => query.eq('tournament_id', tournament_id),
      },
    );

    if (point_table_error || !point_table) {
      setResultDetail({
        loading: false,
        error: point_table_error,
        data: undefined,
      });
      return;
    }

    setResultDetail({
      loading: false,
      error: undefined,
      data: {
        best_record,
        point_table,
      },
    });
  }, [tournament_id]);

  useEffect(() => {
    fetchResultDetail();
  }, [fetchResultDetail]);

  return { ...resultDetail };
};
