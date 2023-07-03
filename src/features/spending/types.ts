import { MoneyTransfer } from '../../core';

export enum SPENDING_TYPE {
  SAVINGS = 'SAVINGS',
  COMPULSORY = 'COMPULSORY',
  EXTRA = 'EXTRA',
}

export type SpendingRow = MoneyTransfer & {
  type: SPENDING_TYPE;
  name: string;
};
export type SpendingGroup = {
  name: string;
  owner: string;
  spendings: SpendingRow[];
};
