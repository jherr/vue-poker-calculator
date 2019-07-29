<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs8>
        <v-btn-toggle v-model="count">
          <v-btn text :value="2">
            2
          </v-btn>
          <v-btn text :value="3">
            3
          </v-btn>
          <v-btn text :value="4">
            4
          </v-btn>
          <v-btn text :value="5">
            5
          </v-btn>
          <v-btn text :value="6">
            6
          </v-btn>
          <v-btn text :value="7">
            7
          </v-btn>
          <v-btn text :value="8">
            8
          </v-btn>
          <v-btn text :value="9">
            9
          </v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>
  </v-container>
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
