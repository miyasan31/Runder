import type { Term } from '~/types/model';

export const termCheck = (term: number): Term => {
  switch (term) {
    case 1:
      return 'Monthly';
    case 2:
      return 'Weekly';
    case 3:
      return 'Daily';
    default:
      return 'Monthly';
  }
};
