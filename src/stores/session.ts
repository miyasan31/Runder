import { proxy } from 'valtio';

export const session = proxy({
  isSignin: false,
});

export const signInSession = () => {
  session.isSignin = true;
};

export const signOutSession = () => {
  session.isSignin = false;
};
