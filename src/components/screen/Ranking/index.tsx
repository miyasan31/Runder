import "react-native-url-polyfill/auto";

import type { VFC } from "react";
import React from "react";

import { Button } from "~/components/ui/Button";
import type { RankingScreenProps } from "~/types";

export type Props = RankingScreenProps<"RankingScreen">;

export const Ranking: VFC<Props> = () => {
  return <Button label="ラベル" />;
};
