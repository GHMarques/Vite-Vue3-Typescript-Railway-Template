export enum TransactionType {
  Buy = 'buy',
  Sell = 'sell',
}

export type Transaction = {
  id: number;
  type: TransactionType;
  quantity: number;
  date: string;
  pokemon_name: string;
  price: string;
};
