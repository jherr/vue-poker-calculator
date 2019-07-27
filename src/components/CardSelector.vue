<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs8>
        <v-btn-toggle v-model="rank">
          <v-btn text :value="Rank.Two">
            2
          </v-btn>
          <v-btn text :value="Rank.Three">
            3
          </v-btn>
          <v-btn text :value="Rank.Four">
            4
          </v-btn>
          <v-btn text :value="Rank.Five">
            5
          </v-btn>
          <v-btn text :value="Rank.Six">
            6
          </v-btn>
          <v-btn text :value="Rank.Seven">
            7
          </v-btn>
          <v-btn text :value="Rank.Eight">
            8
          </v-btn>
          <v-btn text :value="Rank.Nine">
            9
          </v-btn>
          <v-btn text :value="Rank.Ten">
            10
          </v-btn>
          <v-btn text :value="Rank.Jack">
            J
          </v-btn>
          <v-btn text :value="Rank.Queen">
            Q
          </v-btn>
          <v-btn text :value="Rank.King">
            K
          </v-btn>
          <v-btn text :value="Rank.Ace">
            A
          </v-btn>
        </v-btn-toggle>
      </v-flex>
      <v-flex xs4>
        <v-btn-toggle v-model="suit">
          <v-btn text :value="Suit.Spades">
            <v-icon>mdi-cards-spade</v-icon>
          </v-btn>
          <v-btn text :value="Suit.Hearts">
            <v-icon>mdi-cards-heart</v-icon>
          </v-btn>
          <v-btn text :value="Suit.Clubs">
            <v-icon>mdi-cards-club</v-icon>
          </v-btn>
          <v-btn text :value="Suit.Diamonds">
            <v-icon>mdi-cards-diamond</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>
  </v-container>
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
