export enum CURRENCY {
  USD = 'USD',
  RUB = 'RUB',
}
export type MoneyTransfer = {
  currency: CURRENCY;
  value: number;
};
