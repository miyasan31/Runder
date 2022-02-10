import type { FC } from "react";
import React from "react";
import type {
  BackgroundColorModifier,
  ColorsModifiers,
  ContainerModifiers,
  MarginModifiers,
  Modifiers,
  PaddingModifiers,
  TypographyModifiers,
} from "react-native-ui-lib";
import { Text as RNUILibText } from "react-native-ui-lib";

import type { ColorTheme, TextTheme } from "~/utils/rnuilibConfig";

type TextThemeProps = { [key in TextTheme | ColorTheme]?: true };

type TextProps = ColorsModifiers &
  MarginModifiers &
  TextThemeProps & {
    children?: React.ReactNode;
  };

export const Text: FC<TextProps> = (props) => {
  const { children, ...textTheme } = props;

  return <RNUILibText {...textTheme}>{children}</RNUILibText>;
};
