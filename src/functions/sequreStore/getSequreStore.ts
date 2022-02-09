import * as SecureStore from "expo-secure-store";

export const getSequreStore = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};
