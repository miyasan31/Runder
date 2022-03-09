import type { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

import { SUPABASE_PUBLIC_KEY, SUPABASE_URL } from '~/constants/ENV';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY, {
  schema: 'public',
  // headers: { 'x-my-custom-header': 'my-app-name' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
  localStorage: AsyncStorage as AsyncStorageStatic,
});
