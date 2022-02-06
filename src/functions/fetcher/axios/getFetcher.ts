import axios from "axios";

import { API_URL } from "~/constants";

const green = "\u001b[32m";
const yellow = "\u001b[33m";
const cyan = "\u001b[36m";
const reset = "\u001b[0m";

export const getFetcher = async (url: string) => {
  console.info(cyan + "| ----------------- axios loging ----------------- ");
  console.info(cyan + "| method   | " + green + "GET");
  console.info(cyan + "| endpoint | " + yellow + `${API_URL}${url}`);
  console.info(cyan + "| -------------------------------------------------- " + reset);

  const result = await axios
    .get(`${API_URL}${url}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error("Error: " + err);
    });

  return result;
};
