import type { FlexStyle, StyleProp, TextStyle, TransformsStyle, ViewStyle } from 'react-native';

import type { theme } from '~/styles/theme';

type ThemeProps = keyof typeof theme[keyof typeof theme];
type ColorTheme = 'color0' | 'color1' | 'color2' | 'color3' | 'white' | 'primary' | 'accent';
type BgTheme = 'bg0' | 'bg1' | 'bg2' | 'bg3' | 'bg4' | 'white' | 'primary';

type OutlineStyle = Pick<ViewStyle, keyof FlexStyle | keyof TransformsStyle>;

export type StyleProps = {
  // Text
  textStyle?: StyleProp<TextStyle>;
  color?: Extract<ThemeProps, ColorTheme>;
  lightColor?: string;
  darkColor?: string;
  // View
  viewStyle?: StyleProp<ViewStyle>;
  bg?: Extract<ThemeProps, BgTheme>;
  lightBg?: string;
  darkBg?: string;
  // View Outline
  outlineStyle?: StyleProp<OutlineStyle>;
};

export type TextStyleProps = Pick<StyleProps, 'textStyle' | 'color' | 'lightColor' | 'darkColor'>;

export type ViewStyleProps = Pick<StyleProps, 'viewStyle' | 'bg' | 'lightBg' | 'darkBg'>;

export type TextInputStyleProps = Omit<StyleProps, 'outlineStyle'>;
