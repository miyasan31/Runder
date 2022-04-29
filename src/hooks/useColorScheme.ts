import { useEffect } from 'react';
import type { ColorSchemeName } from 'react-native';
import { useRecoilState } from 'recoil';

import { THEME_KEY } from '~/constants/ENV';
import { theme } from '~/stores/theme';
import { getSecureStore } from '~/utils/secureStore';

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  const [themeInfo, setThemeInfo] = useRecoilState(theme);

  useEffect(() => {
    (async () => {
      const appTheme = (await getSecureStore(THEME_KEY)) as ColorSchemeName;
      if (appTheme) setThemeInfo(appTheme);
    })();
  }, []);

  return themeInfo as NonNullable<ColorSchemeName>;
};
