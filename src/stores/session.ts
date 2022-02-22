import { proxy } from 'valtio';

export const session = proxy({
  isSignin: false,
});

export const updateSession = (boolean: boolean) => {
  session.isSignin = boolean;
};
