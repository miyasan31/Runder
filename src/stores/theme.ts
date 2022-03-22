import { proxy } from 'valtio';

export const customTheme = proxy<{ theme: 'light' | 'dark' }>({
  theme: 'dark',
});

export const updateTheme = (color: 'light' | 'dark') => {
  customTheme.theme = color;
};
