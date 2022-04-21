import { atom } from 'recoil';

import type { User } from '~/types/model';

export type AuthUserState = Pick<User, 'id' | 'name' | 'avatar' | 'profile' | 'sex'>;

export type AuthSession = {
  isSignIn: boolean;
  user: AuthUserState | null;
};

export const user = atom<AuthSession | null>({
  key: 'user',
  default: {
    isSignIn: false,
    user: null,
  },
});
