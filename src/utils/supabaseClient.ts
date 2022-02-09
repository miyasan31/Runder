import type { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

import { SUPABASE_PUBLIC_KEY, SUPABASE_URL } from "~/constants/SUPABASE";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY, {
  localStorage: AsyncStorage as AsyncStorageStatic,
});
