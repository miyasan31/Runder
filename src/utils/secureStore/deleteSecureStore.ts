import { deleteItemAsync } from 'expo-secure-store';

export const deleteSecureStore = async (key: string) => {
  return await deleteItemAsync(key);
};
