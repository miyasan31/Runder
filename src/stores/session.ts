import { proxy } from 'valtio';

export const session = proxy({
  isSignIn: false,
});

export const updateSession = (boolean: boolean) => {
  session.isSignIn = boolean;
};
