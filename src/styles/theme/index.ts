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

// Themeのlightとdarkのkeyが同じものがあることを確認する
type Theme = Record<'light' | 'dark', Record<string, string>>;
type ThemeCheck<T extends Theme> = Record<
  'light' | 'dark',
  Record<keyof T['light'] | keyof T['dark'], string>
>;

export const createTheme = () => {
  const common: ThemeCheck<typeof commonTheme> = commonTheme;
  const color: ThemeCheck<typeof colorTheme> = colorTheme;
  const bg: ThemeCheck<typeof bgTheme> = bgTheme;
  const border: ThemeCheck<typeof borderTheme> = borderTheme;
  const icon: ThemeCheck<typeof iconTheme> = iconTheme;

  return {
    light: {
      ...common.light,
      ...color.light,
      ...bg.light,
      ...border.light,
      ...icon.light,
    },
    dark: {
      ...common.dark,
      ...color.dark,
      ...bg.dark,
      ...border.dark,
      ...icon.dark,
    },
  };
};

export const theme = createTheme();

// Themeのkeyについて確認なし

// export const theme = {
//   light: {
//     ...commonTheme.light,
//     ...bgTheme.light,
//     ...colorTheme.light,
//     ...iconTheme.light,
//     ...borderTheme.light,
//   },
//   dark: {
//     ...commonTheme.dark,
//     ...bgTheme.dark,
//     ...colorTheme.dark,
//     ...iconTheme.dark,
//     ...borderTheme.dark,
//   },
// } as const;
