import type { ColorSchemeName } from 'react-native';
import { useColorScheme as useNativeColorScheme } from 'react-native';

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return useNativeColorScheme() as NonNullable<ColorSchemeName>;
};
