import Vue from 'vue';
import Vuex from 'vuex';
import Card, { Suit, Rank } from '@/calculator/card';
import Table from './calculator/table';

Vue.use(Vuex);

const startingCards = [
  new Card(Suit.Clubs, Rank.Ace),
  new Card(Suit.Hearts, Rank.Ace),
];

export default new Vuex.Store({
  state: {
    cards: startingCards.slice(),
    table: new Table(startingCards),
  },
  mutations: {
    setCard(state, { index, card }) {
      state.cards[index] = card;
      state.table = new Table(startingCards);
    },
  },
  actions: {
  },
});
