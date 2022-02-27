import type { SupabaseFrom, SupabaseQuery } from '~/types/supabase';

import { supabaseClient } from './supabaseClient';

export const supabaseSelect = async <T>(
  from: SupabaseFrom,
  query: SupabaseQuery<T> = { columns: '*', options: {} },
) => {
  const supabase = supabaseClient.from<T>(from).select(query.columns, query.options);
  return await (query.filter ? query.filter(supabase) : supabase);
};
