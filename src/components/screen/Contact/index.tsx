import "react-native-url-polyfill/auto";

import type { VFC } from "react";
import React from "react";

import { Button } from "~/components/ui/Button";
import type { ContactScreenProps } from "~/types";

export type Props = ContactScreenProps<"ContactScreen">;

export const Contact: VFC<Props> = () => {
  return <Button label="ラベル" />;
};
