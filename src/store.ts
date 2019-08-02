import Vue from 'vue';
import Vuex from 'vuex';
import Card, { Suit, Rank } from '@/calculator/card';
import { Hands, HandRanks } from '@/calculator/hands';
import Table from '@/calculator/table';

Vue.use(Vuex);

const MAX_HANDS: number = 20000;

const startingCards = [
  new Card(Suit.Clubs, Rank.Ace),
  new Card(Suit.Hearts, Rank.Ace),
];
const firstTable = new Table(startingCards);

interface Statistics {
  totalCount: number;
  progress: number;
  wins: number;
  winsAfterTurn: number;
  winsAfterFlop: number;
  winsWith: any;
  losesTo: any;
}

const updateStatistics = (table: Table, stats: Statistics) => {
  stats.totalCount += 1;
  stats.progress = Math.round((stats.totalCount / MAX_HANDS) * 100.0);
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
    progress: 0.0,
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
  playerCount: number;
}

const store = new Vuex.Store({
  state: {
    cards: startingCards,
    table: firstTable,
    statistics: resetStatistics(firstTable),
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
  },
  actions: {
    runSimulation({ state, commit, dispatch }) {
      if (state.statistics.totalCount < MAX_HANDS) {
        commit('setupTable');
      }
      window.setTimeout(() => dispatch('runSimulation'), 100);
    },
    startSimulation({ commit, dispatch }) {
      dispatch('runSimulation');
    },
  },
});

store.dispatch('startSimulation');

export default store;
