import { atom } from "recoil";

export const signedUsersAtom = atom<string[]>({
  key: "signedUser",
  default: [],
});

export const connectedSheetNameAtom = atom<string | undefined>({
  key: "connectedSheet",
  default: undefined,
});
