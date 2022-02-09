import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/Profile";
import { Profile } from "~/components/screen/Profile";

export const ProfileScreen: VFC<Props> = (props) => {
  return <Profile {...props} />;
};
