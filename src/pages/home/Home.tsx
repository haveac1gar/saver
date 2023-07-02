import styled from "styled-components";

const TextBlock = styled.div`
    padding: 8px 0;
  `,
  Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    padding: 40px 0;
  `;

enum CURRENCY {
  USD = "USD",
  RUB = "RUB",
}
enum SPENDING_TYPE {
  SAVINGS = "SAVINGS",
  COMPULSORY = "COMPULSORY",
  EXTRA = "EXTRA",
}

type MoneyTransfer = {
  currency: CURRENCY;
  value: number;
};
type Spending = MoneyTransfer & {
  type: SPENDING_TYPE;
  name: string;
};

const USD_PRICE = 89,
  FULL_DATA: {
    income: MoneyTransfer;
    spendings: Spending[];
  } = {
    "income": {
      "currency": CURRENCY.USD,
      "value": 4000,
    },
    "spendings": [
      {
        "currency": CURRENCY.USD,
        "value": 980,
        "type": SPENDING_TYPE.COMPULSORY,
        "name": "Аренда",
      },
      {
        "currency": CURRENCY.RUB,
        "value": 45000,
        "type": SPENDING_TYPE.COMPULSORY,
        "name": "Еда и прочее",
      },
      {
        "currency": CURRENCY.RUB,
        "value": 70000,
        "type": SPENDING_TYPE.COMPULSORY,
        "name": "Таблетки",
      },
      {
        "currency": CURRENCY.RUB,
        "value": 40000,
        "type": SPENDING_TYPE.COMPULSORY,
        "name": "Бабушка",
      },
    ],
  },
  getRUB = (data: MoneyTransfer) => (data.currency === CURRENCY.RUB
? data.value
: data.value * USD_PRICE),
  getUSD = (data: MoneyTransfer) => (data.currency === CURRENCY.USD
? data.value
: data.value / USD_PRICE);

export function Home() {

  const incomeUSD = getUSD(FULL_DATA.income),
    incomeRUB = getRUB(FULL_DATA.income),
    spendingUSD = FULL_DATA.spendings.reduce(
      (acc, curr) => acc + getUSD(curr),
      0
    ),
    spendingRUB = FULL_DATA.spendings.reduce(
      (acc, curr) => acc + getRUB(curr),
      0
    );

  console.log({
    incomeRUB,
    incomeUSD,
    spendingRUB,
    spendingUSD,
  });

  return (
    <>
      <Title>
            CASH SAVER
</Title>

      <TextBlock>
            Income:{incomeUSD.toFixed(2)}

        {" "}
            USD
</TextBlock>

      <TextBlock>
            Spendings:{spendingUSD.toFixed(2)}

        {" "}
            USD
</TextBlock>
      </>
  );

}
