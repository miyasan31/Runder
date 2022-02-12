import "react-native-url-polyfill/auto";

import type { VFC } from "react";
import React from "react";

import { Button } from "~/components/ui/Button";
import type { ProfileScreenProps } from "~/types";

export type Props = ProfileScreenProps<"ProfileScreen">;

export const Profile: VFC<Props> = () => {
  return <Button label="ラベル" />;
};
