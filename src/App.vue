<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Poker Simulator</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <CardSelector :index="0" />
      <CardSelector :index="1" />
      <CurrentTable />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CardSelector from '@/components/CardSelector.vue';
import CurrentTable from '@/components/CurrentTable.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CardSelector,
    CurrentTable,
  },
  data: () => ({
  }),
});
</script>
