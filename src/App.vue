<script setup lang="ts">
import { ref } from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import DashboardTab from './components/tabs/DashboardTab.vue';
import BuyTab from './components/tabs/BuyTab.vue';
import SellTab from './components/tabs/SellTab.vue';
import HistoryTab from './components/tabs/HistoryTab.vue';

const tab = ref('dashboard');
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="catching_pokemon" />
          </q-avatar>
          PokeCoin
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs v-model="tab" inline-label>
        <q-tab name="dashboard" label="Dashboard" icon="dashboard" />
        <q-tab name="buy" label="Buy" icon="attach_money" />
        <q-tab name="sell" label="Sell" icon="sell" />
        <q-tab name="history" label="History" icon="history" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- <router-view /> -->
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="dashboard">
          <DashboardTab />
        </q-tab-panel>

        <q-tab-panel name="buy">
          <BuyTab />
        </q-tab-panel>

        <q-tab-panel name="sell">
          <SellTab />
        </q-tab-panel>
        <q-tab-panel name="history">
          <HistoryTab />
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
