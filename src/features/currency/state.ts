import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const usdPriceAtom = atom<number>({
  key: 'usd-price',
  default: 0,
});

export const useUsdPrice = () => useRecoilValue(usdPriceAtom);
export const useSetUsdPrice = () => {
  const setUsdPrice = useSetRecoilState(usdPriceAtom);

  return useCallback(
    (price: number) => {
      setUsdPrice(price);
    },
    [setUsdPrice],
  );
};
