import { atom } from 'recoil';

import type { Shoes } from '~/types/model';

export const shoes = atom<Partial<Shoes>>({
  key: 'shoes',
  default: {},
});
