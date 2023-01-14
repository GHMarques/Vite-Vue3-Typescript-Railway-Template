import { TransactionType } from './Transaction';

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  price: string;
  quantity?: number;
};

export type FilterPokemon = {
  pokemon_name: string;
};

export type BuyPokemon = {
  quantity: number;
  type: TransactionType;
  pokemon_id: number;
};
