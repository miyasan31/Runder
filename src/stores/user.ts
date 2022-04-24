import { atom } from 'recoil';

import type { User } from '~/types/model';

export type AuthUserState = Pick<User, 'id' | 'name' | 'avatar' | 'profile' | 'sex'>;

export type AuthSession = AuthUserState & {
  isSignIn: boolean;
};

export const user = atom<AuthSession>({
  key: 'user',
  default: {
    id: '',
    name: '',
    avatar: '',
    profile: '',
    sex: 0,
    isSignIn: false,
  },
});
