import { atom } from "recoil";

export const user = atom({
  key: "user",
  default: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    token: "",
    isSignin: false,
  },
});
