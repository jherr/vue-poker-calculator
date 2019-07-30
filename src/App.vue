<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Poker Simulator</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-layout row>
          <v-flex lg6>
            <h2>Cards</h2>
            <CardSelector :index="0" />
            <CardSelector :index="1" />
            <h2>Players</h2>
            <PlayerCount />

            <v-container grid-list-md>
              <v-layout row>
                <v-flex sm6>
                  <v-btn color="primary" @click="onPlay" :disabled="playing" block>
                    <v-icon>mdi-play</v-icon>
                    Start Simulation
                  </v-btn>
                </v-flex>
                <v-flex sm6>
                  <v-btn color="error" @click="onStop" :disabled="!playing" block>
                    <v-icon>mdi-stop</v-icon>
                    Stop Simulation
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex lg6>
            <v-tabs>
              <v-tab key="overall">
                Overall
              </v-tab>
              <v-tab key="wins">
                Wins
              </v-tab>
              <v-tab key="losses">
                Losses
              </v-tab>
              <v-tab key="last">
                Last Hand
              </v-tab>

              <v-tab-item key="overall">
                <WinStatistics />
              </v-tab-item>
              <v-tab-item key="wins">
                <v-subheader>
                  You win {{(statistics.wins / statistics.totalCount) * 100.0 | percent}} of the time and
                  these are the winning hands
                </v-subheader>
                <HandPerformance
                  :hands="statistics.winsWith"
                  :total="statistics.wins"
                />
              </v-tab-item>
              <v-tab-item key="losses">
                <v-subheader>
                  You lose {{((statistics.totalCount - statistics.wins) / statistics.totalCount) * 100.0 | percent}} of the time
                  and these are the hands you lose to
                </v-subheader>
                <HandPerformance
                  :hands="statistics.losesTo"
                  :total="statistics.totalCount - statistics.wins"
                />
              </v-tab-item>
              <v-tab-item key="last">
                <CurrentTable />
              </v-tab-item>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CardSelector from '@/components/CardSelector.vue';
import CurrentTable from '@/components/CurrentTable.vue';
import PlayerCount from '@/components/PlayerCount.vue';
import WinStatistics from '@/components/WinStatistics.vue';
import HandPerformance from '@/components/HandPerformance.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CardSelector,
    CurrentTable,
    PlayerCount,
    WinStatistics,
    HandPerformance,
  },
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
      this.$store.dispatch('startSimulation');
    },
    onStop() {
      this.$store.commit('setPlaying', false);
    },
  },
});
</script>
