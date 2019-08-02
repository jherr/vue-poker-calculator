<template>
  <div>
    <v-container grid-list-md>
      <v-layout row>
        <v-flex sm4 class="column">
          <div>
            Wins after flop
          </div>
          <div>
            <v-progress-circular
              :value="(statistics.winsAfterFlop / statistics.totalCount) * 100.0"
              :size="100"
              :width="20"
            >
              {{(statistics.winsAfterFlop / statistics.totalCount) * 100.0 | percent}}
            </v-progress-circular>
          </div>
        </v-flex>
        <v-flex sm4 class="column">
          <div>
            Wins after turn
          </div>
          <div>
            <v-progress-circular
              :value="(statistics.winsAfterTurn / statistics.totalCount) * 100.0"
              :size="100"
              :width="20"
            >
              {{(statistics.winsAfterTurn / statistics.totalCount) * 100.0 | percent}}
            </v-progress-circular>
          </div>
        </v-flex>
        <v-flex sm4 class="column">
          <div>
            Wins after river
          </div>
          <div>
            <v-progress-circular
              :value="(statistics.wins / statistics.totalCount) * 100.0"
              :size="100"
              :width="20"
            >
              {{(statistics.wins / statistics.totalCount) * 100.0 | percent}}
            </v-progress-circular>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    statistics: {
      get(): any {
        return this.$store.state.statistics;
      },
    },
  },
});
</script>

<style>
.column {
  text-align: center;
}
</style>
