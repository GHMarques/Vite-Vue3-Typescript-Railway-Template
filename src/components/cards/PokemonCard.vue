<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import TransactionService from '../../services/TransactionService';
import { BuyPokemon } from '../../types/Pokemon';
import { Pokemon } from '../../types/Pokemon';
import { TransactionType } from '../../types/Transaction';

const $q = useQuasar();
const props = defineProps<{ pokemon: Pokemon; type: TransactionType }>();
const quantity = ref(0);
function onSubmit(evt: any) {
  if (props.type == TransactionType.Buy) {
    buy();
  } else {
    sell();
  }
}

async function buy() {
  $q.loading.show();
  const data: BuyPokemon = {
    quantity: quantity.value,
    type: TransactionType.Buy,
    pokemon_id: props.pokemon.id,
  };
  const response = await TransactionService.transaction(data);
  if (response.id) {
    $q.notify({
      message: 'Successful purchase',
      color: 'positive',
    });
  } else {
    $q.notify({
      message: 'Something went wrong. Try again later.',
      color: 'negative',
    });
  }
  $q.loading.hide();
}

async function sell() {
  $q.loading.show();
  const data: BuyPokemon = {
    quantity: quantity.value,
    type: TransactionType.Sell,
    pokemon_id: props.pokemon.id,
  };
  const response = await TransactionService.transaction(data);
  if (response.id) {
    if (props.pokemon.quantity) {
      props.pokemon.quantity -= quantity.value;
    }

    $q.notify({
      message: 'Completed sale',
      color: 'positive',
    });
  } else {
    $q.notify({
      message: 'Something went wrong. Try again later.',
      color: 'negative',
    });
  }
  $q.loading.hide();
}
</script>

<template>
  <div class="q-pa-md q-gutter-md">
    <q-list bordered class="rounded-borders" style="max-width: 600px">
      <q-expansion-item
        :expand-icon="pokemon.quantity ? 'sell' : 'add_shopping_cart'"
        :expanded-icon="pokemon.quantity ? 'money_off_csred' : 'shopping_cart'"
      >
        <template v-slot:header>
          <q-item-section center class="col-2">
            <q-item-label class="q-mt-sm text-weight-medium">{{ pokemon.name }}</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Base Experience: </span>
              <span class="text-grey-8">{{ pokemon.base_experience }}</span>
            </q-item-label>
            <q-item-label lines="1">
              <span class="text-weight-medium">Price: </span>
              <span class="text-grey-8">{{ pokemon.price }}</span>
            </q-item-label>
            <q-item-label lines="1" v-if="pokemon.quantity">
              <span class="text-weight-medium">Quantity: </span>
              <span class="text-grey-8">{{ pokemon.quantity }}</span>
            </q-item-label>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
            <q-form @submit.prevent="onSubmit" class="q-gutter-md">
              <div class="row justify-center">
                <div class="col-6">
                  <q-input
                    filled
                    type="number"
                    v-model="quantity"
                    label="Quantity"
                    lazy-rules
                    :rules="[
                      (val) => (val !== null && val !== '') || 'Please type the quantity',
                      (val) =>
                        (val > 0 && val < (pokemon.quantity ?? 1000)) ||
                        'Please type a valid quantity',
                    ]"
                  />
                </div>

                <div class="col-3" stretch>
                  <q-btn :label="pokemon.quantity ? 'Sell' : 'Buy'" type="submit" color="primary" />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<style></style>
