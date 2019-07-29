<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs8>
        <v-btn-toggle v-model="count">
          <v-btn text :value="2" x-small>
            2
          </v-btn>
          <v-btn text :value="3" x-small>
            3
          </v-btn>
          <v-btn text :value="4" x-small>
            4
          </v-btn>
          <v-btn text :value="5" x-small>
            5
          </v-btn>
          <v-btn text :value="6" x-small>
            6
          </v-btn>
          <v-btn text :value="7" x-small>
            7
          </v-btn>
          <v-btn text :value="8" x-small>
            8
          </v-btn>
          <v-btn text :value="9" x-small>
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
