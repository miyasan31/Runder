import { atom } from 'recoil';

type Theme = null | 'light' | 'dark';

export const theme = atom<Theme>({
  key: 'theme',
  default: null,
});
