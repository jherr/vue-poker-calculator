<template>
  <div>
    <h3>Community Cards</h3>
    <div>
      <SmallCard
        v-for="(card, index) in community"
        :key="index"
        :card="card"
      />
    </div>
    <h3>Hands</h3>
    <HandRow
      v-for="(hand, index) in hands"
      :key="index"
      :hand="hand"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hand from '@/calculator/hand';
import Card from '@/calculator/card';
import SmallCard from '@/components/SmallCard';
import HandRow from '@/components/HandRow';

export default Vue.extend({
  name: 'CurrentTable',
  components: {
    SmallCard,
    HandRow,
  },
  computed: {
    hands: {
      get(): Hand[] {
        return this.$store.state.table.hands;
      },
    },
    community: {
      get(): Card[] {
        return this.$store.state.table.communityCards;
      },
    },
  },
});
</script>
