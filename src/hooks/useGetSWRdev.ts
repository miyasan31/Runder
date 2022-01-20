import useSWR from "swr";
import fetch from "unfetch";

const green = "\u001b[32m";
const yellow = "\u001b[33m";
const magenta = "\u001b[35m";
const cyan = "\u001b[36m";
const reset = "\u001b[0m";

export const getFetcher = async (url: string) => {
  console.info(cyan + "| ----------------- fetcher loging ----------------- ");
  console.info(cyan + "| fetcher  | " + magenta + "useSWR - getFetcher");
  console.info(cyan + "| method   | " + green + "GET");
  console.info(cyan + "| endpoint | " + yellow + `http://localhost:5000${url}`);
  console.info(cyan + "| -------------------------------------------------- " + reset);

  // ローディングUIを表示させるために0.4秒待つ
  await new Promise((resolve) => setTimeout(resolve, 400));

  const result = await fetch(`http://localhost:5000${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      return await res.json();
    })
    .catch((err) => {
      throw new Error("Error: " + err);
    });

  return result;
};

export const useGetSWRdev = <T>(url: string) => {
  const { data, error } = useSWR<T>(url, getFetcher);

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};
