import * as SecureStore from "expo-secure-store";

export const saveSequreStore = async (key: string, value: string) => {
  return await SecureStore.setItemAsync(key, value);
};
