import { proxy } from 'valtio';

export const date = proxy({
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
});
