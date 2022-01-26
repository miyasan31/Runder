import type { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import type { PostgrestError } from "@supabase/supabase-js";

export type SupabaseFrom = "user";

export type Count = "exact" | "planned" | "estimated";

export type Filter<T> = (query: PostgrestFilterBuilder<T>) => PostgrestFilterBuilder<T>;

export type SupabaseFilter<T = any> = (filter: Filter<T>, deps: any[]) => Filter<T>;

export type Options = {
  head?: boolean;
  count?: Count | null;
};

export type SupabaseQuery<T = any> = {
  columns?: string | "*";
  options?: Options;
  filter?: Filter<T> | false | null;
  pause?: boolean;
};

export type SelectState<T = any> = {
  loading?: boolean;
  error?: PostgrestError | undefined;
  data?: (T[] | null) | undefined;
  count?: number | null;
};

export type SupabaseFetchStatus<T = any> = {
  loading: boolean;
  error: PostgrestError | undefined;
  data: (T[] | null) | undefined;
  count: number | null;
};
