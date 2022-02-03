import { atom } from "recoil";

import type { User } from "~/types/fetcher";

export const user = atom<User[] | null>({
  key: "user",
  default: null,
});
