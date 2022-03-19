import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import type { PostgrestError } from '@supabase/supabase-js';

export type SupabaseFrom =
  | 'tournament'
  | 'user'
  | 'point'
  | 'info'
  | 'location'
  | 'point_table'
  | 'record'
  | 'shoes'
  | 'suggestion';

export type CountOption = 'exact' | 'planned' | 'estimated';

export type Filter<T> = (query: PostgrestFilterBuilder<T>) => PostgrestFilterBuilder<T>;

export type SupabaseFilter<T = any> = (filter: Filter<T>, deps: any[]) => Filter<T>;

export type Options = {
  head?: boolean;
  count?: CountOption | null;
};

export type SupabaseQuery<T = any> = {
  columns?: string | '*';
  options?: Options;
  filter?: Filter<T> | false | null;
  pause?: boolean;
};

export type SupabaseFetchStatus<T = any> = {
  loading: boolean;
  error?: PostgrestError;
  data?: T[] | null;
  count: number | null;
};
