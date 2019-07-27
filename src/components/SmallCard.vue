<template>
  <div class="card">
    {{card.rank.toString().slice(0,1)}}
    <v-icon>
      {{SuitMap[card.suit]}}
    </v-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Suit } from '@/calculator/card';

const SuitMap: any = {
  [Suit.Hearts]: 'mdi-cards-heart',
  [Suit.Spades]: 'mdi-cards-spade',
  [Suit.Clubs]: 'mdi-cards-club',
  [Suit.Diamonds]: 'mdi-cards-diamond',
};

export default Vue.extend({
  name: 'SmallCard',
  props: ['card'],
  data: () => ({
    SuitMap,
  }),
});
</script>

<style scoped>
.card {
  width: 2em;
  height: 3.5em;
  border: 1.5px solid #666;
  border-radius: 3px;
  margin: 1px;
  display: inline-block;
  text-align: center;
}
</style>
