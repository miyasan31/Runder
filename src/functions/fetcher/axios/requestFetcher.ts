import axios from "axios";

import { API_URL } from "~/constants";

const green = "\u001b[32m";
const yellow = "\u001b[33m";
const cyan = "\u001b[36m";
const white = "\u001b[37m";
const reset = "\u001b[0m";

type Method = "post" | "put" | "delete";

export const requestFetcher = async (url: string, body: unknown, method: Method) => {
  console.info(cyan + "| ----------------- axios loging ----------------- ");
  console.info(cyan + "| method   | " + green + method);
  console.info(cyan + "| endpoint | " + yellow + `${API_URL}${url}`);
  console.info(cyan + "| body     | " + white, body);
  console.info(cyan + "| -------------------------------------------------- " + reset);

  const result = await axios[method](`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error("Error: " + err);
    });

  return result;
};
