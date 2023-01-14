import { FilterPokemon } from '../types/Pokemon';

class PokemonService {
  async filter(data: FilterPokemon) {
    const response = await fetch(
      'https://laravel-production-9bb9.up.railway.app/api/pokemons?pokemon_name=' +
        data.pokemon_name
    ).then((r) => r.json());
    return response.data;
  }
}

export default new PokemonService();
