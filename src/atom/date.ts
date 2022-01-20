import { atom } from "recoil";

export const date = atom({
  key: "date",
  default: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  },
});
