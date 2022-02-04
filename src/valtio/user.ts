import { proxy } from "valtio";

import type { User } from "~/types/fetcher";

export const user = proxy<User>({
  id: 1,
  name: "user_name",
  created_at: new Date("2022-01-02 03:04:05"),
});

export const onChangeUser = (value: User) => {
  user.id = value.id;
  user.name = value.name;
  user.created_at = value.created_at;
};

export const onChangeName = (value: string) => {
  user.name = value;
};
