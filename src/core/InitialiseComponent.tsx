import { useInitialiseUsdPrice } from "../features/currency";
import { useInitialiseUser, useUID } from "../features/user";

export function InitialiseComponent() {

  useInitialiseUser();
  useInitialiseUsdPrice();

  const uid = useUID();
  console.log({ uid });

  return null;

}
