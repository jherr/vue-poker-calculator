<template>
  <div :class="`card ${card.used ? 'used' : ''}`">
    <span class="rank">{{RankMap[card.rank]}}</span>
    <v-icon>
      {{SuitMap[card.suit]}}
    </v-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Suit, Rank } from '@/calculator/card';

const SuitMap: any = {
  [Suit.Hearts]: 'mdi-cards-heart',
  [Suit.Spades]: 'mdi-cards-spade',
  [Suit.Clubs]: 'mdi-cards-club',
  [Suit.Diamonds]: 'mdi-cards-diamond',
};
const RankMap: any = {
  [Rank.Ace]: 'A',
  [Rank.AceHigh]: 'A',
  [Rank.King]: 'K',
  [Rank.Queen]: 'Q',
  [Rank.Jack]: 'J',
  [Rank.Ten]: '10',
  [Rank.Nine]: '9',
  [Rank.Eight]: '8',
  [Rank.Seven]: '7',
  [Rank.Six]: '6',
  [Rank.Five]: '5',
  [Rank.Four]: '4',
  [Rank.Three]: '3',
  [Rank.Two]: '2',
};

export default Vue.extend({
  name: 'SmallCard',
  props: ['card'],
  data: () => ({
    SuitMap,
    RankMap,
  }),
});
</script>

<style scoped>
.rank {
  font-size: x-small;
}
.card {
  width: 2em;
  height: 3.5em;
  border: 1.5px solid black;
  border-radius: 3px;
  margin: 1px;
  display: inline-block;
  text-align: center;
  opacity: 0.3;
}

.used {
  opacity: 1;
}
</style>
