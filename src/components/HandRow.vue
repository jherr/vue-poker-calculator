<template>
  <div
    :class="hand.playerHand ? 'player' : 'cpu'"
  >
    <SmallCard
      v-for="(card, index) in cards"
      :key="index"
      :card="card"
    />
    <span class="hand">
      {{hand.match.hand}}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/calculator/card';
import SmallCard from '@/components/SmallCard.vue';

export default Vue.extend({
  props: ['hand'],
  components: {
    SmallCard,
  },
  computed: {
    cards: {
      get(): Card[] {
        return this.hand.cards;
      },
    },
  },
});
</script>

<style scoped>
.player {
  padding: 2px;
  border: 1px solid #999;
}
.cpu {
  padding: 2px;
  border: 1px solid white;
}
.hand {
  font-weight: bold;
  font-size: large;
}
</style>
