import type { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import type { User } from '~/types/fetcher';
import { supabaseClient } from '~/utils/supabaseClient';

type Status<T> = {
  isLoading: boolean;
  isError: PostgrestError | undefined;
  data: (T[] | null) | undefined;
};

export const useFetchUser = () => {
  const [status, setStatus] = useState<Status<User>>({
    isLoading: true,
    isError: undefined,
    data: undefined,
  });

  const fetch = async () => {
    try {
      const { data, error } = await supabaseClient.from<User>('user').select('*');

      if (error) {
        setStatus((prev) => {
          return { ...prev, isLoading: false, isError: error };
        });
      }

      setStatus((prev) => {
        if (!data || !data.length) {
          return { ...prev, isLoading: false, data: null };
        }
        return { ...prev, isLoading: false, data: data };
      });
    } catch (e: any) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    isLoading: status.isLoading,
    isError: status.isError,
    data: status.data,
  };
};
