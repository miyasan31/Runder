import {
  SECURE_STORE_ACCESS_TOKEN_DEVELOP,
  SECURE_STORE_PREVIOUS_AUTH_PROVIDER,
  // SECURE_STORE_ACCESS_TOKEN_PRODUCTION,
} from '@env';

// export const ACCESS_TOKEN = SECURE_STORE_ACCESS_TOKEN_PRODUCTION || '';
export const ACCESS_TOKEN_KEY = SECURE_STORE_ACCESS_TOKEN_DEVELOP || '';
export const AUTH_PROVIDER_KEY = SECURE_STORE_PREVIOUS_AUTH_PROVIDER || '';