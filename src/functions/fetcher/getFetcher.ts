import { API_URL } from "src/constants";
import fetch from "unfetch";

const red = "\u001b[31m";
const green = "\u001b[32m";
const yellow = "\u001b[33m";
const magenta = "\u001b[35m";
const cyan = "\u001b[36m";
const reset = "\u001b[0m";

export const getFetcher = async (url: string) => {
  console.info(cyan + "| ----------------- fetcher loging ----------------- ");
  console.info(cyan + "| fetcher  | " + magenta + "getFetcher");
  console.info(cyan + "| method   | " + green + "GET");
  console.info(cyan + "| endpoint | " + yellow + `${API_URL}${url}`);
  console.info(cyan + "| -------------------------------------------------- " + reset);

  const result = await fetch(`${API_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw new Error("Error: " + err);
    });

  return result;
};

export const getFetcherWithToken = async (url: string, token: string) => {
  console.info(cyan + "| ----------------- fetcher loging ----------------- ");
  console.info(cyan + "| fetcher  | " + magenta + "getFetcherWithToken");
  console.info(cyan + "| method   | " + green + "GET");
  console.info(cyan + "| endpoint | " + yellow + `${API_URL}${url}`);
  console.info(cyan + "| token    |" + red + token);
  console.info(cyan + "| -------------------------------------------------- " + reset);

  const result = await fetch(`${API_URL}${url}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw new Error("Error: " + err);
    });

  return result;
};
