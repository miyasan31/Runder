import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps, VFC } from "react";
import React, { memo } from "react";

const BOTTOM_ICON = 30;

type Props = {
  name: ComponentProps<typeof Ionicons>["name"];
  color: string;
};

export const TabBarIcon: VFC<Props> = memo((props) => {
  return <Ionicons style={{ marginBottom: -3 }} size={BOTTOM_ICON} {...props} />;
});
