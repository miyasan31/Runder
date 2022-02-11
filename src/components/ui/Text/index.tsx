import type { FC } from "react";
import React from "react";
import type { MarginModifiers } from "react-native-ui-lib";
import { Text as RNUILibText } from "react-native-ui-lib";

import type { ColorTheme, TextTheme } from "~/utils/rnuilibConfig";

type TextThemeProps = { [key in TextTheme | ColorTheme]?: true };

type TextProps = MarginModifiers &
  TextThemeProps & {
    children?: React.ReactNode;
  };

export const Text: FC<TextProps> = (props) => {
  const { children, ...textTheme } = props;

  return <RNUILibText {...textTheme}>{children}</RNUILibText>;
};
