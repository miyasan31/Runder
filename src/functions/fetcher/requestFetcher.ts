import { API_URL } from "src/constants";
import fetch from "unfetch";

const green = "\u001b[32m";
const yellow = "\u001b[33m";
const magenta = "\u001b[35m";
const cyan = "\u001b[36m";
const white = "\u001b[37m";
const reset = "\u001b[0m";

type Method = "POST" | "PUT" | "DELETE";
type Response<R> = {
  statusCode: number;
  response: R;
};

export const authRequestFetcher = async (
  url: string,
  body: unknown,
  method: Method,
): Promise<{ statusCode: number }> => {
  console.info(cyan + "| ----------------- fetcher loging ----------------- ");
  console.info(cyan + "| fetcher  | " + magenta + "authRequestFetcher");
  console.info(cyan + "| method   | " + green + method);
  console.info(cyan + "| endpoint | " + yellow + `${API_URL}${url}`);
  console.info(cyan + "| body     | " + white, body);
  console.info(cyan + "| -------------------------------------------------- " + reset);

  // ローディングUIを表示させるために0.4秒待つ
  await new Promise((resolve) => setTimeout(resolve, 400));

  const result = await fetch(`${API_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      const statusCode = res.status;
      return { statusCode };
    })
    .catch((err) => {
      throw new Error("Error: " + err);
    });

  return result;
};

export const requestFetcher = async <R>(
  url: string,
  body: unknown,
  method: Method,
  token: string,
): Promise<Response<R>> => {
  console.info(cyan + "| ----------------- fetcher loging ----------------- ");
  console.info(cyan + "| fetcher  | " + magenta + "requestFetcher");
  console.info(cyan + "| method   | " + green + method);
  console.info(cyan + "| endpoint | " + yellow + `${API_URL}${url}`);
  console.info(cyan + "| body     | " + white, body);
  console.info(`Bearer token   | ${token}`);
  console.info(cyan + "| -------------------------------------------------- " + reset);

  // ローディングUIを表示させるために0.4秒待つ
  await new Promise((resolve) => setTimeout(resolve, 400));

  const result = await fetch(`${API_URL}${url}`, {
    method: method,
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (res) => {
      const statusCode = res.status;
      const response = await res.json();
      return { statusCode, response };
    })
    .catch((err) => {
      throw new Error("Error: " + err);
    });

  return result;
};
