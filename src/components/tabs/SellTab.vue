<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import PokemonCard from '../cards/PokemonCard.vue';
import TransactionService from '../../services/TransactionService';
import { FilterPokemon, Pokemon } from '../../types/Pokemon';
import { TransactionType } from '../../types/Transaction';

const $q = useQuasar();
const pokemons = ref<Pokemon[]>([]);
const type: TransactionType = TransactionType.Sell;

async function getPortifolio() {
  $q.loading.show();
  pokemons.value = await TransactionService.getPortifolio();
  $q.loading.hide();
}
getPortifolio();
</script>

<template>
  <div v-for="pokemon in pokemons" :key="pokemon.id" class="row justify-center">
    <PokemonCard :pokemon="pokemon" :type="type" class="col-6" />
  </div>
</template>

<style scoped></style>
