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
      <PlayerCount />

      <v-btn color="primary" @click="onPlay" :disabled="playing">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn color="error" @click="onStop" :disabled="!playing">
        <v-icon>mdi-stop</v-icon>
      </v-btn>

      <h2>{{statistics.totalCount}} Hands Played</h2>
      <table>
        <tr>
          <td>            
            Flop
          </td>
          <td>            
            Turn
          </td>
          <td>            
            River
          </td>
        </tr>
        <tr>
          <td>            
            <v-progress-circular
              :value="(statistics.winsAfterFlop / statistics.totalCount) * 100.0"
            />
          </td>
          <td>            
            <v-progress-circular
              :value="(statistics.winsAfterTurn / statistics.totalCount) * 100.0"
            />
          </td>
          <td>            
            <v-progress-circular
              :value="(statistics.wins / statistics.totalCount) * 100.0"
            />
          </td>
        </tr>
        <tr>
          <td> 
            {{(statistics.winsAfterFlop / statistics.totalCount) * 100.0 | percent}}
          </td>
          <td>            
            {{(statistics.winsAfterTurn / statistics.totalCount) * 100.0 | percent}}
          </td>
          <td>            
            {{(statistics.wins / statistics.totalCount) * 100.0 | percent}}
          </td>
        </tr>
      </table>

      <h2>Wins With</h2>
      <table width="100%">
        <tr v-for="hand in Object.keys(statistics.winsWith)" :key="hand">
          <td width="10%" nobreak>
            {{hand}}
          </td>
          <td width="85%">
            <v-progress-linear :value="safePercent(statistics.winsWith[hand], statistics.wins) * 100.0"></v-progress-linear>
          </td>
          <td width="5%">
            {{safePercent(statistics.winsWith[hand], statistics.wins) * 100.0 | percent}}
          </td>
        </tr>
      </table>

      <h2>Loses To</h2>
      <table width="100%">
        <tr v-for="hand in Object.keys(statistics.losesTo)" :key="hand">
          <td width="10%" nobreak>
            {{hand}}
          </td>
          <td width="85%">
            <v-progress-linear :value="safePercent(statistics.losesTo[hand], statistics.totalCount - statistics.wins) * 100.0"></v-progress-linear>
          </td>
          <td width="5%">
            {{safePercent(statistics.losesTo[hand], statistics.totalCount - statistics.wins) * 100.0 | percent}}
          </td>
        </tr>
      </table>

      <CurrentTable />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CardSelector from '@/components/CardSelector.vue';
import CurrentTable from '@/components/CurrentTable.vue';
import PlayerCount from '@/components/PlayerCount.vue';

export default Vue.extend({
  filters: {
    percent: (v: number) => `${Math.round(v)}%`,
  },
  name: 'App',
  components: {
    CardSelector,
    CurrentTable,
    PlayerCount,
  },
  data: () => ({
  }),
  computed: {
    statistics: {
      get(): any {
        return this.$store.state.statistics;
      },
    },
    playing() {
      return this.$store.state.playing;
    },
  },
  methods: {
    onPlay() {
      this.$store.commit('setPlaying', true);
    },
    onStop() {
      this.$store.commit('setPlaying', false);
    },
    safePercent(count: number, total: number) {
      return total > 0 ? count / total : 0;
    },
  },
});
</script>
