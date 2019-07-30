<template>
  <v-container grid-list-md>
    <v-layout row v-for="hand in Object.keys(hands)" :key="hand">
      <v-flex xs6 md4>
        {{hand}}
      </v-flex>
      <v-flex xs5 md6>
        <v-progress-linear :value="safePercent(hands[hand], total) * 100.0"></v-progress-linear>
      </v-flex>
      <v-flex xs1 md2>
        {{safePercent(hands[hand], total) * 100.0 | percent}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: [ 'hands', 'total' ],
  methods: {
    safePercent(count: number, total: number) {
      return total > 0 ? count / total : 0;
    },
  },
});
</script>
