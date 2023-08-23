import { atom } from "recoil";

export const accessTokenState = atom({
  key: "access_token",
  default: "",
});

export const userInfoState = atom({
  key: "userInfo",
  default: null,
});
