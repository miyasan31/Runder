import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/Tounament";
import { Tounament } from "~/components/screen/Tounament";

export const TounamentScreen: VFC<Props> = (props) => {
  return <Tounament {...props} />;
};
