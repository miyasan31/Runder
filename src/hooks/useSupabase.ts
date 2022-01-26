import "react-native-url-polyfill/auto";

import { useCallback, useEffect, useState } from "react";
import type {
  SupabaseFetchStatus,
  SupabaseFilter,
  SupabaseFrom,
  SupabaseQuery,
} from "src/types/supabase";
import { supabaseClient } from "src/utils/supabaseClient";

export const useSupabaseFilter: SupabaseFilter = (filter, deps = []) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(filter, [deps]);
  return callback;
};

export const useSupabaseSelect = <T>(
  from: SupabaseFrom,
  query: SupabaseQuery<T> = { columns: "*", options: {} },
): SupabaseFetchStatus<T> => {
  const [status, setStatus] = useState<SupabaseFetchStatus<T>>({
    loading: true,
    error: undefined,
    data: undefined,
    count: null,
  });

  const fetchSupabase = useCallback(async () => {
    try {
      const suabase = supabaseClient.from<T>(from).select(query.columns, query.options);

      const { data, error, count } = await (query.filter ? query.filter(suabase) : suabase);

      // is Erorr
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
