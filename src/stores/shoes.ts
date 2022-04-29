import { atom } from 'recoil';

import type { Shoes } from '~/types/model';

export const shoes = atom<Pick<Shoes, 'id' | 'brand' | 'shoes'>>({
  key: 'shoes',
  default: {
    id: 0,
    brand: '',
    shoes: '',
  },
});
