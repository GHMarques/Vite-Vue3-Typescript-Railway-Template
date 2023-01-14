<script setup lang="ts">
import { useQuasar } from 'quasar';
import { Transaction, TransactionType } from '../../types/Transaction';

const $q = useQuasar();
const props = defineProps<{ transaction: Transaction }>();
</script>

<template>
  <div class="q-pa-md" style="max-width: 600px">
    <q-list bordered padding>
      <q-item>
        <q-item-section top avatar>
          {{ transaction.pokemon_name }}
        </q-item-section>

        <q-item-section>
          <q-item-label>Value: {{ transaction.price }}</q-item-label>
          <q-item-label caption>Quantity: {{ transaction.quantity }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ transaction.date }}</q-item-label>
          <q-item-label caption>{{
            transaction.type == TransactionType.Buy ? 'Buy' : 'Sell'
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style></style>
