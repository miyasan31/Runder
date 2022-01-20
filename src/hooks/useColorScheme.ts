import type { ColorSchemeName } from "react-native";
import { useColorScheme as NativeUseColorScheme } from "react-native";

export const useColorScheme = (): NonNullable<ColorSchemeName> => {
  return NativeUseColorScheme() as NonNullable<ColorSchemeName>;
};
