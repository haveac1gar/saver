import { useInitialiseUsdPrice, useUsdPrice } from '../features/currency';
import { useInitialiseUser, useUID } from '../features/user';

export function InitialiseComponent() {
  useInitialiseUser();
  useInitialiseUsdPrice();

  const uid = useUID();
  const usdPrice = useUsdPrice();
  console.log({ uid, usdPrice });

  return null;
}
