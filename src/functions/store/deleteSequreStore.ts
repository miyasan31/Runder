import * as SecureStore from "expo-secure-store";

export const deleteSequreStore = async (key: string) => {
  return await SecureStore.deleteItemAsync(key);
};
