import { getItemAsync } from 'expo-secure-store';

export const getSecureStore = async (key: string) => {
  return await getItemAsync(key);
};
