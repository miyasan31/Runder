import type { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from 'react-native';

import type { theme } from '~/styles/theme';

type ThemeProps = keyof typeof theme[keyof typeof theme];
type TextTheme = 'text0' | 'text1' | 'text2' | 'text3' | 'white' | 'primary' | 'accent';
type BgTheme = 'bg0' | 'bg1' | 'bg2' | 'bg3' | 'bg4' | 'white' | 'primary';

type OutlineStyle = Pick<ViewStyle, keyof FlexStyle | keyof TransformsStyle>;

export type StyleProps = {
  // Text
  textStyle?: StyleProp<TextStyle>;
  color?: Extract<ThemeProps, TextTheme>;
  lightText?: string;
  darkText?: string;
  // View
  bgStyle?: StyleProp<ViewStyle>;
  bg?: Extract<ThemeProps, BgTheme>;
  lightBg?: string;
  darkBg?: string;
  // View Outline
  outlineStyle?: StyleProp<OutlineStyle>;
};

export type TextStyleProps = Pick<StyleProps, 'textStyle' | 'color' | 'lightText' | 'darkText'>;

export type ViewStyleProps = Pick<StyleProps, 'bgStyle' | 'bg' | 'lightBg' | 'darkBg'>;

export type TextInputStyleProps = Omit<StyleProps, 'outlineStyle'>;
