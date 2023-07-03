import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGift, faSackDollar } from '@fortawesome/free-solid-svg-icons'

import { useUID } from '../../user';
import { SPENDING_TYPE, SpendingGroup, SpendingRow } from '../types';
import { CURRENCY, Spacer } from '../../../core';
import { useUsdPrice } from '../../currency';

export type SpendingCardProps = {
  group: SpendingGroup;
};

const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;
const HeaderText = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const HeaderDesc = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: grey;
`;

const SpendingRowWrapper = styled.div<{ type?: 'heading' | 'total' }>`
  ${props => props.type === 'heading' ? `
    margin: 0 20px;
    padding: 12px 0;
    border-bottom: 1px solid #d3d3d3;
  ` : props.type === 'total' ? `
    margin: 0 20px;
    padding: 12px 0;
    border-top: 1px solid #d3d3d3;
  ` :`
    padding: 12px 20px;
    &:hover {
      background-color: #f3f3f3;
    }
  `}
  font-size: 12px;
  display: flex;
  flex-direction: row;
  height: 25px;
`;
const SpendingRowName = styled.div`
  width: 150px;
  display: flex;
  font-weight: 300;
  align-items: center;
`;
const SpendingRowValue = styled.div<{ grey?: boolean; bold?: boolean }>`
  width: 150px;
  display: flex; 
  align-items: center;
  ${props => props.grey ? `color: grey;` : ''}
  font-weight: ${props => props.bold ? 400 : 300};
  justify-content: flex-end;
`;
const SpendingRowIcon = styled.div`
  width: 30px;
  display: flex; 
  align-items: center;
`;
const IconCircle = styled.div`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type SpendingCardRowProps = SpendingRow;

// const getRUB = (data: MoneyTransfer) =>
//   data.currency === CURRENCY.RUB ? data.value : data.value * USD_PRICE;
// const getUSD = (data: MoneyTransfer) =>
//   data.currency === CURRENCY.USD ? data.value : data.value / USD_PRICE;

const SpendingRowElement = (props: SpendingCardRowProps) => {
  const { value, name, type, currency } = props;
  const usdPrice = useUsdPrice();
  const fullUsdPrice = (currency === CURRENCY.USD ? value : value / usdPrice).toFixed(2);

  return (
    <SpendingRowWrapper>
      <SpendingRowIcon>
        <IconCircle>
          {type === SPENDING_TYPE.SAVINGS ? (
            <FontAwesomeIcon icon={faSackDollar} size='lg' color='green' />
          ) : type === SPENDING_TYPE.COMPULSORY ? (
            <FontAwesomeIcon icon={faHouse} size='lg' color='orange' />
          ) : type === SPENDING_TYPE.EXTRA ? (
            <FontAwesomeIcon icon={faGift} size='lg' color='red' />
          ) : null}
        </IconCircle>
      </SpendingRowIcon>
      <SpendingRowName>
        {name}
      </SpendingRowName>
      <SpendingRowValue bold>
        {fullUsdPrice} {CURRENCY.USD}
      </SpendingRowValue>
      <SpendingRowValue grey={currency !== CURRENCY.RUB}>
        {currency === CURRENCY.RUB ? (
          <>{value.toFixed(2)} {currency}</>
        ) : (
          <>{0} {currency}</>
        )}
      </SpendingRowValue>
      <SpendingRowValue grey={currency !== CURRENCY.USD}>
        {currency === CURRENCY.USD ? (
          <>{value.toFixed(2)} {currency}</>
        ) : (
          <>{0} {currency}</>
        )}
      </SpendingRowValue>
    </SpendingRowWrapper>
  );
}

const SpendingRowHeader = () => {
  return (
    <SpendingRowWrapper type='heading'>
      <SpendingRowIcon />
      <SpendingRowName>
        Название
      </SpendingRowName>
      <SpendingRowValue bold>
        Всего, USD
      </SpendingRowValue>
      <SpendingRowValue>
        Траты, RUB
      </SpendingRowValue>
      <SpendingRowValue>
        Траты, USD
      </SpendingRowValue>
    </SpendingRowWrapper>
  );
}
const SpendingRowTotal = (props: { spendings: SpendingRow[] }) => {
  const { spendings } = props;
  const usdPrice = useUsdPrice();
  const allUsd = spendings.reduce((acc, curr) => acc + (curr.currency === CURRENCY.USD ? curr.value : 0), 0);
  const allRub = spendings.reduce((acc, curr) => acc + (curr.currency === CURRENCY.RUB ? curr.value : 0), 0);
  const totalInUsd = spendings.reduce((acc, curr) => acc + (curr.currency === CURRENCY.USD ? curr.value : curr.value / usdPrice), 0);

  return (
    <SpendingRowWrapper type='total'>
      <SpendingRowIcon />
      <SpendingRowName />
      <SpendingRowValue bold>
        {totalInUsd.toFixed(2)} {CURRENCY.USD}
      </SpendingRowValue>
      <SpendingRowValue>
        {allRub.toFixed(2)} {CURRENCY.RUB}
      </SpendingRowValue>
      <SpendingRowValue>
        {allUsd.toFixed(2)} {CURRENCY.USD}
      </SpendingRowValue>
    </SpendingRowWrapper>
  );
};

export const SpendingCard = (props: SpendingCardProps) => {
  const uid = useUID();
  const { name, owner, spendings } = props.group;

  return (
    <CardWrapper>
      <Header>
        <HeaderText>{name}</HeaderText>
        <Spacer horizontal size={16} />
        |
        <Spacer horizontal size={16} />
        <HeaderDesc>Расходы</HeaderDesc>
      </Header>
      <SpendingRowHeader />
      {spendings.map((spending, i) => (
        <SpendingRowElement key={i} {...spending} />
      ))}
      <SpendingRowTotal spendings={spendings} />
      <Spacer size={16} />
    </CardWrapper>
  );
};
