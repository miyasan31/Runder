import * as SecureStore from 'expo-secure-store';

export const saveSecureStore = async (key: string, value: string) => {
  return await SecureStore.setItemAsync(key, value);
};
