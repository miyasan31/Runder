import { useRecoilValue } from 'recoil';

import { useSystemTheme } from '~/hooks/useSystemTheme';
import { theme as StoresTheme } from '~/stores/theme';
import { theme } from '~/styles/theme';

export const useTheme = (
  themeProps: { light?: string; dark?: string },
  themeName: keyof typeof theme.light & keyof typeof theme.dark,
) => {
  const systemTheme = useSystemTheme();
  const themeInfo = useRecoilValue(StoresTheme);

  if (!themeInfo) {
    const colorFromProps = themeProps[systemTheme];
    return colorFromProps || theme[systemTheme][themeName];
  }

  const colorFromProps = themeProps[themeInfo];
  return colorFromProps || theme[themeInfo][themeName];
};
