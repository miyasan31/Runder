import type { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from 'react-native';

import type {
  BgTheme,
  BorderTheme,
  ColorTheme,
  CommonTheme,
  IconTheme,
  ShadowTheme,
} from '~/styles/theme';

type OutlineStyle = Pick<ViewStyle, keyof FlexStyle | keyof TransformsStyle>;

export type StyleProps = {
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  outlineStyle?: StyleProp<OutlineStyle>;

  color?: CommonTheme | ColorTheme;
  lightColor?: string;
  darkColor?: string;

  bg?: CommonTheme | BgTheme;
  lightBg?: string;
  darkBg?: string;

  icon?: CommonTheme | IconTheme;
  lightIcon?: string;
  darkIcon?: string;

  border?: CommonTheme | BorderTheme;
  lightBorder?: string;
  darkBorder?: string;

  shadow?: CommonTheme | ShadowTheme;
  lightShadow?: string;
  darkShadow?: string;
};

export type TextStyleProps = Pick<StyleProps, 'color' | 'lightColor' | 'darkColor'>;

export type ViewStyleProps = Pick<
  StyleProps,
  | 'bg'
  | 'lightBg'
  | 'darkBg'
  | 'border'
  | 'lightBorder'
  | 'darkBorder'
  | 'shadow'
  | 'lightShadow'
  | 'darkShadow'
>;

export type CustomViewStyleProps = Pick<
  StyleProps,
  | 'viewStyle'
  | 'bg'
  | 'lightBg'
  | 'darkBg'
  | 'border'
  | 'lightBorder'
  | 'darkBorder'
  | 'shadow'
  | 'lightShadow'
  | 'darkShadow'
>;

export type ButtonStyleProps = Omit<StyleProps, 'icon' | 'lightIcon' | 'darkIcon'>;

export type CardStyleProps = Omit<
  StyleProps,
  'textStyle' | 'color' | 'lightColor' | 'darkColor' | 'icon' | 'lightIcon' | 'darkIcon'
>;

export type TextInputStyleProps = Omit<
  StyleProps,
  'outlineStyle' | 'icon' | 'lightIcon' | 'darkIcon'
>;
