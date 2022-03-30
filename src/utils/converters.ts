import getSymbolFromCurrency from 'currency-symbol-map';

export const convertMoney = (money: any): string =>
  `${getSymbolFromCurrency(money.currency)} ${(money.amount / 100).toFixed(2)}`;
