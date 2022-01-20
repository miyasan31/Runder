import { theme } from "src/styles";

import { useColorScheme } from "./useColorScheme";

export const useThemeColor = (
  themeProps: { light?: string; dark?: string },
  themeName: keyof typeof theme.light & keyof typeof theme.dark,
) => {
  const themeColor = useColorScheme();
  const colorFromProps = themeProps[themeColor];
  return colorFromProps || theme[themeColor][themeName];
};
