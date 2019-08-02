<template>
  <div class="selector">
    <v-select
      :items="[Rank.Two, Rank.Three, Rank.Four, Rank.Five, Rank.Six,
      Rank.Seven, Rank.Eight, Rank.Nine, Rank.Ten, Rank.Jack, Rank.Queen,
      Rank.King, Rank.Ace]"
      :label="`Rank for card #${index + 1}`"
      v-model="rank"
    ></v-select>
    <v-select
      :items="[Suit.Spades, Suit.Hearts, Suit.Diamonds, Suit.Clubs]"
      :label="`Suit for card #${index + 1}`"
      v-model="suit"
    ></v-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card, { Suit, Rank } from '@/calculator/card';

export default Vue.extend({
  name: 'CardSelector',
  props: [ 'index' ],
  data: () => ({
    Suit,
    Rank,
  }),
  computed: {
    suit: {
      get(): Suit {
        return this.$store.state.cards[this.index].suit;
      },
      set(val: string) {
        this.$store.commit('setCard', {
          index: this.index,
          card: new Card(
            val as Suit,
            this.$store.state.cards[this.index].rank,
          ),
        });
      },
    },
    rank: {
      get(): Rank {
        return this.$store.state.cards[this.index].rank;
      },
      set(val: string) {
        this.$store.commit('setCard', {
          index: this.index,
          card: new Card(
            this.$store.state.cards[this.index].suit,
            val as Rank,
          ),
        });
      },
    },
  },
});
</script>

<style scoped>
.selector {
  margin-bottom: 1em;
}
</style>
