import { bgTheme } from './bg.theme';
import { borderTheme } from './border.theme';
import { colorTheme } from './color.theme';
import { commonTheme } from './common.theme';
import { iconTheme } from './icon.theme';

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
};

// export const theme = {
//   light: {
//     bg0: '#ffffff00',
//     bg1: '#FFFFFF',
//     bg2: '#EEEEEE',
//     bg3: '#DDDDDD',
//     bg4: '#FAFAFA',
//     color0: '#FFFFFF',
//     color1: '#333333',
//     color2: '#808080',
//     color3: '#DDDDDD',
//     border: '#BBBBBB',
//     icon: '#BBBBBB',
//     white: '#FFFFFF',
//     primary: '#19EC9C',
//     accent: '#4BB4FF',
//   },
//   dark: {
//     bg0: '#00000000',
//     bg1: '#373c3f',
//     bg2: '#2f3437',
//     bg3: '#697379',
//     bg4: '#373c3f',
//     color0: '#404852',
//     color1: '#FFFFFF',
//     color2: '#BBBBBB',
//     color3: '#5A6471',
//     border: '#7D8B9C',
//     icon: '#7D8B9C',
//     white: '#FFFFFF',
//     primary: '#24D995',
//     accent: '#47ADF5',
//   },
// };
