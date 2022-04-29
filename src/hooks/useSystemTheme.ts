import type { ColorSchemeName } from 'react-native';
import { useColorScheme as NativeUseColorScheme } from 'react-native';

export const useSystemTheme = (): NonNullable<ColorSchemeName> => {
  return NativeUseColorScheme() as NonNullable<ColorSchemeName>;
};
