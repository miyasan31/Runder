import { useEffect } from 'react';
import type { ColorSchemeName } from 'react-native';
import { subscribe, useSnapshot } from 'valtio';

import { customTheme, updateTheme } from '~/stores/theme';
import { getSecureStore } from '~/utils/secureStore';

const theme_key = 'runder_theme_vfauih87o3hrilbafla';

const unsubscribe = subscribe(customTheme, () => customTheme.theme);

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  const themeSnapshot = useSnapshot(customTheme);

  useEffect(() => {
    (async () => {
      const appTheme = (await getSecureStore(theme_key)) as ColorSchemeName;
      if (appTheme) updateTheme(appTheme);
    })();

    return () => unsubscribe();
  }, [themeSnapshot.theme]);

  // App theme
  return themeSnapshot.theme;
};
