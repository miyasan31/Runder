import { atom } from "recoil";
import type { User } from "src/types/fetcher";

export const user = atom<User[] | null>({
  key: "user",
  default: null,
});
