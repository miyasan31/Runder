import { bgTheme } from './bg.theme';
import { borderTheme } from './border.theme';
import { colorTheme } from './color.theme';
import { commonTheme } from './common.theme';
import { iconTheme } from './icon.theme';

export type CommonTheme = keyof typeof commonTheme[keyof typeof commonTheme];
export type BgTheme = keyof typeof bgTheme[keyof typeof bgTheme];
export type ColorTheme = keyof typeof colorTheme[keyof typeof colorTheme];
export type IconTheme = keyof typeof iconTheme[keyof typeof iconTheme];
export type BorderTheme = keyof typeof borderTheme[keyof typeof borderTheme];

export const theme = {
  light: {
    ...commonTheme.light,
    ...bgTheme.light,
    ...colorTheme.light,
    ...iconTheme.light,
    ...borderTheme.light,
  },
  dark: {
    ...commonTheme.dark,
    ...bgTheme.dark,
    ...colorTheme.dark,
    ...iconTheme.dark,
    ...borderTheme.dark,
  },
} as const;
