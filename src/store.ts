import Vue from 'vue';
import Vuex from 'vuex';
import Card, { Suit, Rank } from '@/calculator/card';
import { Hands, HandRanks } from '@/calculator/hands';
import Table from '@/calculator/table';

Vue.use(Vuex);

const startingCards = [
  new Card(Suit.Clubs, Rank.Ace),
  new Card(Suit.Hearts, Rank.Ace),
];
const firstTable = new Table(startingCards);

interface Statistics {
  totalCount: number;
  wins: number;
  winsAfterTurn: number;
  winsAfterFlop: number;
  winsWith: any;
  losesTo: any;
}

const updateStatistics = (table: Table, stats: Statistics) => {
  stats.totalCount += 1;
  stats.wins += table.won ? 1 : 0;
  stats.winsAfterFlop += table.wonAfterFlop ? 1 : 0;
  stats.winsAfterTurn += table.wonAfterTurn ? 1 : 0;
  if (table.won) {
    stats.winsWith[table.hands[0].match.hand] += 1;
  } else {
    stats.losesTo[table.hands[0].match.hand] += 1;
  }
};

const resetStatistics = (table: Table): Statistics => {
  const stats: Statistics = {
    totalCount: 1,
    wins: firstTable.won ? 1 : 0,
    winsAfterFlop: firstTable.wonAfterFlop ? 1 : 0,
    winsAfterTurn: firstTable.wonAfterTurn ? 1 : 0,
    winsWith: {},
    losesTo: {},
  };
  HandRanks.forEach((hand: Hands) => {
    stats.winsWith[hand] = 0;
    stats.losesTo[hand] = 0;
  });
  return stats;
};

interface StoreState {
  cards: Card[];
  table: Table;
  statistics: Statistics;
  playing: boolean;
  playerCount: number;
}

const store = new Vuex.Store({
  state: {
    cards: startingCards,
    table: firstTable,
    statistics: resetStatistics(firstTable),
    playing: false,
    playerCount: 9,
  },
  mutations: {
    setCard(state: StoreState, { index, card }) {
      state.cards[index] = card;
      state.table = new Table(state.cards, state.playerCount);
      state.statistics = resetStatistics(state.table);
    },
    setPlayerCount(state: StoreState, count: number) {
      state.playerCount = count;
      state.table = new Table(state.cards, state.playerCount);
      state.statistics = resetStatistics(state.table);
    },
    setupTable(state: StoreState) {
      const statistics = {
        ...state.statistics,
      };
      let table = new Table(state.cards, state.playerCount);
      for (let i = 0; i < 100; i += 1) {
        table = new Table(state.cards, state.playerCount);
        updateStatistics(table, statistics);
      }
      state.table = table;
      state.statistics = statistics;
    },
    setPlaying(state: StoreState, playing: boolean) {
      state.playing = playing;
    },
  },
  actions: {
    runSimulation({ state, commit, dispatch }) {
      if (state.playing) {
        commit('setupTable');
        window.setTimeout(() => dispatch('runSimulation'), 100);
      }
    },
    startSimulation({ commit, dispatch }) {
      commit('setPlaying', true);
      dispatch('runSimulation');
    },
  },
});

export default store;
