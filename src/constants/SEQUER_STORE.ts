import {
  SEQUER_STORE_ACCESS_TOKEN_DEVELOP,
  SEQUER_STORE_PREVIOUS_AUTH_PROVIDER,
  // SEQUER_STORE_ACCESS_TOKEN_PRODUCTION,
} from '@env';

// export const ACCESS_TOKEN = SEQUER_STORE_ACCESS_TOKEN_PRODUCTION || '';
export const ACCESS_TOKEN_KEY = SEQUER_STORE_ACCESS_TOKEN_DEVELOP || '';
export const AUTH_PROVIDER_KEY = SEQUER_STORE_PREVIOUS_AUTH_PROVIDER || '';
