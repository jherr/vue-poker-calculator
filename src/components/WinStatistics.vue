<template>
  <div>
    <h2>{{statistics.totalCount}} Hands Played</h2>
    <v-container grid-list-md>
      <v-layout row>
        <v-flex sm4 class="column">
          <div>
            Win after flop
          </div>
          <div>
            <v-progress-circular
              :value="(statistics.winsAfterFlop / statistics.totalCount) * 100.0"
              :size="100"
              :width="30"
            />
          </div>
          <div>
            {{(statistics.winsAfterFlop / statistics.totalCount) * 100.0 | percent}}
          </div>
        </v-flex>
        <v-flex sm4 class="column">
          <div>
            Win after turn
          </div>
          <div>
            <v-progress-circular
              :value="(statistics.winsAfterTurn / statistics.totalCount) * 100.0"
              :size="100"
              :width="30"
            />
          </div>
          <div>
            {{(statistics.winsAfterTurn / statistics.totalCount) * 100.0 | percent}}
          </div>
        </v-flex>
        <v-flex sm4 class="column">
          <div>
            Win after river
          </div>
          <div>
            <v-progress-circular
              :value="(statistics.wins / statistics.totalCount) * 100.0"
              :size="100"
              :width="30"
            />
          </div>
          <div>
            {{(statistics.wins / statistics.totalCount) * 100.0 | percent}}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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
