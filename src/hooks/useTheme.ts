import { useSnapshot } from 'valtio';

import { customTheme } from '~/stores/theme';
import { theme } from '~/styles';

export const useTheme = (
  themeProps: { light?: string; dark?: string },
  themeName: keyof typeof theme.light & keyof typeof theme.dark,
) => {
  const customThemeSnapshot = useSnapshot(customTheme);
  const colorFromProps = themeProps[customThemeSnapshot.theme];
  return colorFromProps || theme[customThemeSnapshot.theme][themeName];
};
