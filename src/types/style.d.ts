import type { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from "react-native";

import type { theme } from "~/styles/theme";

type ThemeProps = keyof typeof theme[keyof typeof theme];
type TextTheme = "text0" | "text1" | "text2" | "text3" | "primary" | "accent";
type BgTheme = "bg0" | "bg1" | "bg2" | "bg3" | "primary" | "accent";

type OutlineStyle = Pick<ViewStyle, keyof FlexStyle | keyof TransformsStyle>;

export type StyleProps = {
  // Text
  textStyle?: StyleProp<TextStyle>;
  textTheme?: Extract<ThemeProps, TextTheme>;
  lightText?: string;
  darkText?: string;
  // Views
  bgStyle?: StyleProp<ViewStyle>;
  bgTheme?: Extract<ThemeProps, BgTheme>;
  lightBg?: string;
  darkBg?: string;
  // View Outline
  outlineStyle?: StyleProp<OutlineStyle>;
};

export type TextStyleProps = Pick<StyleProps, "textStyle" | "textTheme" | "lightText" | "darkText">;

export type ViewStyleProps = Pick<StyleProps, "bgStyle" | "bgTheme" | "lightBg" | "darkBg">;
