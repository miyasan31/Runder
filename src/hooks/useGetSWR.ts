import { getFetcherWithToken } from "src/functions/fetcher";
import useSWR from "swr";

export const useGetSWR = <T>(url: string) => {
  const { data, error } = useSWR<T>(url);

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};

export const useGetSWRWithToken = <T>(url: string, token: string) => {
  const { data, error } = useSWR<T>([url, token], getFetcherWithToken);

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};
