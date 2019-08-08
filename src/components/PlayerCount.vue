<template>
  <v-select
    :items="[2, 3, 4, 5, 6, 7, 8, 9]"
    :label="$t('numberOfPlayers')"
    v-model="count"
  ></v-select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PlayerCount',
  computed: {
    count: {
      get(): number {
        return this.$store.state.playerCount;
      },
      set(val: string) {
        this.$store.commit('setPlayerCount', parseInt(val, 10));
      },
    },
  },
});
</script>
