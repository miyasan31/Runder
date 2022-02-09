import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/Ranking";
import { Ranking } from "~/components/screen/Ranking";

export const RankingScreen: VFC<Props> = (props) => {
  return <Ranking {...props} />;
};
