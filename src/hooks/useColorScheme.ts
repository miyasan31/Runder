import { useEffect } from 'react';
import type { ColorSchemeName } from 'react-native';
import { useRecoilState } from 'recoil';

import { theme } from '~/stores/theme';
import { getSecureStore } from '~/utils/secureStore';

const theme_key = 'qin_todo_theme_vfauih87oa';

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  const [themeInfo, setThemeInfo] = useRecoilState(theme);

  useEffect(() => {
    (async () => {
      const appTheme = (await getSecureStore(theme_key)) as ColorSchemeName;
      if (appTheme) setThemeInfo(appTheme);
    })();
  }, []);

  return themeInfo as NonNullable<ColorSchemeName>;
};
