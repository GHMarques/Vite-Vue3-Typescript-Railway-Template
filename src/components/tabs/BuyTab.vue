<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import PokemonCard from '../cards/PokemonCard.vue';
import PokemonService from '../../services/PokemonService';
import { FilterPokemon, Pokemon } from '../../types/Pokemon';
import { TransactionType } from '../../types/Transaction';

const $q = useQuasar();
const pokemons = ref<Pokemon[]>([]);
const pokemonName = ref('');

async function filter() {
  $q.loading.show();
  const data: FilterPokemon = {
    pokemon_name: pokemonName.value,
  };
  pokemons.value = await PokemonService.filter(data);
  $q.loading.hide();
}
const type: TransactionType = TransactionType.Buy;
filter();
</script>

<template>
  <q-form @submit.prevent="filter" class="q-gutter-md">
    <div class="row">
      <div class="col-10">
        <q-input bottom-slots v-model="pokemonName" label="Filter">
          <template v-slot:append>
            <q-icon
              v-if="pokemonName !== ''"
              name="close"
              @click="pokemonName = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-2">
        <q-btn label="Search" type="submit" color="primary" />
      </div>
    </div>
  </q-form>

  <div v-for="pokemon in pokemons" :key="pokemon.id" class="row justify-center">
    <PokemonCard :pokemon="pokemon" :type="type" class="col-6" />
  </div>
</template>

<style scoped></style>
