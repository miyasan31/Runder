import "react-native-url-polyfill/auto";

import type { VFC } from "react";
import React from "react";

import { Button } from "~/components/ui/Button";
import type { ResultScreenProps } from "~/types";

export type Props = ResultScreenProps<"ResultScreen">;

export const Result: VFC<Props> = () => {
  return <Button label="ラベル" />;
};
