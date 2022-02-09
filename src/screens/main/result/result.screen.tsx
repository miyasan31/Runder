import type { VFC } from "react";
import React from "react";

import type { Props } from "~/components/screen/Result";
import { Result } from "~/components/screen/Result";

export const ResultScreen: VFC<Props> = (props) => {
  return <Result {...props} />;
};
