import styled from 'styled-components';
import { SPENDING_TYPE, SpendingCard, SpendingCardProps } from '../../features/spending';
import { CURRENCY, Spacer } from '../../core';

const PageWrapper = styled.div`
  margin: 36px 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const SpendingCardData: SpendingCardProps = {
  group: {
    name: 'Июль 2023',
    owner: '123',
    spendings: [
      {
        currency: CURRENCY.USD,
        value: 980,
        type: SPENDING_TYPE.COMPULSORY,
        name: 'Аренда',
      },
      {
        currency: CURRENCY.RUB,
        value: 45000,
        type: SPENDING_TYPE.COMPULSORY,
        name: 'Еда и прочее',
      },
      {
        currency: CURRENCY.RUB,
        value: 70000,
        type: SPENDING_TYPE.COMPULSORY,
        name: 'Таблетки',
      },
      {
        currency: CURRENCY.RUB,
        value: 20000,
        type: SPENDING_TYPE.EXTRA,
        name: 'Развлечения',
      },
      {
        currency: CURRENCY.USD,
        value: 200,
        type: SPENDING_TYPE.SAVINGS,
        name: 'Сбережения',
      },
      {
        currency: CURRENCY.RUB,
        value: 40000,
        type: SPENDING_TYPE.COMPULSORY,
        name: 'Бабушка',
      }]
  },
};

export function Home() {
  return (
    <PageWrapper>
      <Title>CASH SAVER</Title>
      <Spacer size={24} />
      <SpendingCard group={SpendingCardData.group} />
    </PageWrapper>
  );
}
