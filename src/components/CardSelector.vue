<template>
  <div class="selector">
    <div>
      <v-btn-toggle v-model="rank">
        <v-btn text :value="Rank.Two" x-small>
          2
        </v-btn>
        <v-btn text :value="Rank.Three" x-small>
          3
        </v-btn>
        <v-btn text :value="Rank.Four" x-small>
          4
        </v-btn>
        <v-btn text :value="Rank.Five" x-small>
          5
        </v-btn>
        <v-btn text :value="Rank.Six" x-small>
          6
        </v-btn>
        <v-btn text :value="Rank.Seven" x-small>
          7
        </v-btn>
        <v-btn text :value="Rank.Eight" x-small>
          8
        </v-btn>
        <v-btn text :value="Rank.Nine" x-small>
          9
        </v-btn>
        <v-btn text :value="Rank.Ten" x-small>
          10
        </v-btn>
        <v-btn text :value="Rank.Jack" x-small>
          J
        </v-btn>
        <v-btn text :value="Rank.Queen" x-small>
          Q
        </v-btn>
        <v-btn text :value="Rank.King" x-small>
          K
        </v-btn>
        <v-btn text :value="Rank.Ace" x-small>
          A
        </v-btn>
      </v-btn-toggle>
    </div>

    <div>
      <v-btn-toggle v-model="suit">
        <v-btn text :value="Suit.Spades" x-small>
          <v-icon x-small>mdi-cards-spade</v-icon>
        </v-btn>
        <v-btn text :value="Suit.Hearts" x-small>
          <v-icon x-small>mdi-cards-heart</v-icon>
        </v-btn>
        <v-btn text :value="Suit.Clubs" x-small>
          <v-icon x-small>mdi-cards-club</v-icon>
        </v-btn>
        <v-btn text :value="Suit.Diamonds" x-small>
          <v-icon x-small>mdi-cards-diamond</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
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
