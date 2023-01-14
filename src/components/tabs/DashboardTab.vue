<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { Dashboard } from '../../types/Dashboard';
import DashboardService from '../../services/DashboardService';

const $q = useQuasar();
const dashboard = ref<Dashboard>();
async function getInfo() {
  $q.loading.show();
  dashboard.value = await DashboardService.getInfo();
  $q.loading.hide();
}
getInfo();
</script>

<template>
  <div class="q-pa-md row justify-center q-gutter-md" v-if="dashboard.name">
    <q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">Helo {{ dashboard.name }},</div>
        <div class="text-subtitle2">Your current balance is {{ dashboard.total }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped></style>
