import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

type UID = string | null;
const userAtom = atom<UID>({
  "key": "uid",
  "default": null,
});

export const useUID = () => useRecoilValue(userAtom);
export const useSetUID = () => {

  const setUID = useSetRecoilState(userAtom);

  return useCallback(
    (uid: UID) => {

      setUID(uid);

    },
    [setUID],
  );

};
