import { useCallback } from 'react';

import type { SupabaseFilter } from '~/types/supabase';

export const useSupabaseFilter: SupabaseFilter = (filter, deps = []) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(filter, [deps]);
  return callback;
};
