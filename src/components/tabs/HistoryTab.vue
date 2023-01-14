<script setup lang="ts">
import HistoryCard from '../cards/HistoryCard.vue';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import TransactionService from '../../services/TransactionService';

const $q = useQuasar();
const transactions = ref([]);
async function get() {
  $q.loading.show();

  transactions.value = await TransactionService.history();
  $q.loading.hide();
}
get();
</script>

<template>
  <div v-for="transaction in transactions" :key="transaction.id" class="row justify-center">
    <HistoryCard :transaction="transaction" class="col-6" />
  </div>
</template>

<style scoped></style>
