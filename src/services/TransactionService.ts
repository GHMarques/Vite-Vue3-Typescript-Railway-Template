import { BuyPokemon } from '../types/Pokemon';

class TransactionService {
  async transaction(data: BuyPokemon) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: data.quantity,
        type: data.type,
        pokemon_id: data.pokemon_id,
      }),
    };
    const response = await fetch(
      'https://laravel-production-9bb9.up.railway.app/api/transactions',
      requestOptions
    ).then((r) => r.json());
    return response.data;
  }

  async history() {
    const response = await fetch(
      'https://laravel-production-9bb9.up.railway.app/api/transactions'
    ).then((r) => r.json());
    return response.data;
  }

  async getPortifolio() {
    const response = await fetch(
      'https://laravel-production-9bb9.up.railway.app/api/portifolio'
    ).then((r) => r.json());
    return response.data;
  }
}

export default new TransactionService();
