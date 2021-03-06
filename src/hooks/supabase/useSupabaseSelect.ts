import { useCallback, useEffect, useState } from 'react';

import { sleep } from '~/functions/sleep';
import type { SupabaseFetchStatus, SupabaseFrom, SupabaseQuery } from '~/types/supabase';
import { supabaseClient } from '~/utils/supabase';

export const useSupabaseSelect = <T>(
  from: SupabaseFrom,
  query: SupabaseQuery<T> = { columns: '*', options: {} },
): SupabaseFetchStatus<T> => {
  const [status, setStatus] = useState<SupabaseFetchStatus<T>>({
    loading: true,
    error: undefined,
    data: undefined,
    count: null,
  });

  const fetchSupabase = useCallback(async () => {
    try {
      const supabase = supabaseClient.from<T>(from).select(query.columns, query.options);

      // const { data, error, count } = await (query.filter ? query.filter(supabase) : supabase);
      const sleepPromise = sleep(400);
      const fetchPromise = query.filter ? query.filter(supabase) : supabase;
      const [{ data, error, count }] = await Promise.all([fetchPromise, sleepPromise]);

      // is Error
      if (error) {
        setStatus((prev) => {
          return { ...prev, loading: false, error: error };
        });
      }
      // is Success
      setStatus((prev) => {
        // is Empty
        if (!data || !data.length) {
          return { ...prev, loading: false, data: null, count: 0 };
        }
        // is Not Empty
        return { ...prev, loading: false, data: data, count: count };
      });
    } catch (e: any) {
      console.error(e.message);
    }
  }, []);

  useEffect(() => {
    fetchSupabase();
  }, []);

  return {
    loading: status.loading,
    error: status.error,
    data: status.data,
    count: status.count,
  };
};
