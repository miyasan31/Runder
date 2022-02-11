import type { FC } from "react";
import React from "react";
import type { MarginModifiers } from "react-native-ui-lib";
import { TextField as RNUILibTextInput } from "react-native-ui-lib";

import type { ColorTheme, TextTheme } from "~/utils/rnuilibConfig";

type TextThemeProps = { [key in TextTheme | ColorTheme]?: true };

type TextProps = MarginModifiers & TextThemeProps;

export const TextInput: FC<TextProps> = (props) => {
  const { ...textTheme } = props;

  return <RNUILibTextInput {...textTheme} />;
};
