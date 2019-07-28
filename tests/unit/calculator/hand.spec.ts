import Hand from '@/calculator/hand';
import { Hands } from '@/calculator/hands';
import Deck from '@/calculator/deck';
import Card, { Suit, Rank } from '@/calculator/card';

describe('Hand', () => {
  it('should make a hand', () => {
    const deck = new Deck();
    const hand = new Hand(deck.draw(5));
    expect(hand.cards.length).toBe(5);
  });

  describe('compare hands', () => {
    it('should hand straight hand rank beats', () => {
      const pair = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.Four),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      const twoPair = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.King),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(pair.compare(twoPair)).toBe(-1);
      expect(twoPair.compare(pair)).toBe(1);
      expect(pair.compare(pair)).toBe(0);
    });

    it('should handle high card beats on pairs', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Queen),
        new Card(Suit.Clubs, Rank.Four),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      const handWithHigh = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.Two),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.compare(handWithHigh)).toBe(-1);
      expect(handWithHigh.compare(hand)).toBe(1);
      expect(hand.compare(hand)).toBe(0);
    });

    it('should handle high card beats on pairs', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Queen),
        new Card(Suit.Clubs, Rank.Queen),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      const handWithHigh = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.King),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.compare(handWithHigh)).toBe(-1);
      expect(handWithHigh.compare(hand)).toBe(1);
      expect(hand.compare(hand)).toBe(0);
    });

    it('should handle high card beats on three of a kind', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Jack),
        new Card(Suit.Clubs, Rank.Queen),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      const handWithHigh = new Hand([
        new Card(Suit.Hearts, Rank.King),
        new Card(Suit.Spades, Rank.King),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.Queen),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.compare(handWithHigh)).toBe(-1);
      expect(handWithHigh.compare(hand)).toBe(1);
      expect(hand.compare(hand)).toBe(0);
    });

    it('should handle high card beats on four of a kind', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Jack),
        new Card(Suit.Clubs, Rank.Jack),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      const handWithHigh = new Hand([
        new Card(Suit.Hearts, Rank.King),
        new Card(Suit.Spades, Rank.King),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.King),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.compare(handWithHigh)).toBe(-1);
      expect(handWithHigh.compare(hand)).toBe(1);
      expect(hand.compare(hand)).toBe(0);
    });

    it('should handle high card beats on straights', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
        new Card(Suit.Spades, Rank.Eight),
        new Card(Suit.Spades, Rank.Ten),
      ]);
      const handWithHigh = new Hand([
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Spades, Rank.Ten),
      ]);
      expect(hand.compare(handWithHigh)).toBe(-1);
      expect(handWithHigh.compare(hand)).toBe(1);
      expect(hand.compare(hand)).toBe(0);
    });
  });

  describe('match all the hand types', () => {
    it('should find a royal straight flush', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Spades, Rank.Ten),
      ]);
      expect(hand.match.hand).toBe(Hands.RoyalStraightFlush);
      expect(hand.match.rank).toBe(9);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, true, true, true,
      ]);
    });

    it('should find a straight flush', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Ten),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
      ]);
      expect(hand.match.hand).toBe(Hands.StraightFlush);
      expect(hand.match.ranks).toEqual([12]);
      expect(hand.match.rank).toBe(8);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, true, true, true,
      ]);

      const lowStraight = new Hand([
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Spades, Rank.Two),
        new Card(Suit.Spades, Rank.Three),
        new Card(Suit.Spades, Rank.Four),
        new Card(Suit.Spades, Rank.Five),
      ]);
      expect(lowStraight.match.hand).toBe(Hands.StraightFlush);
      expect(lowStraight.match.ranks).toEqual([4]);
      expect(lowStraight.match.rank).toBe(8);
      expect(lowStraight.cards.map((c) => c.used)).toEqual([
        true, true, true, true, true,
      ]);

      const hand2 = new Hand([
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Ten),
        new Card(Suit.Clubs, Rank.Ten),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
      ]);
      expect(hand2.match.hand).toBe(Hands.StraightFlush);
      expect(hand2.match.ranks).toEqual([12]);
      expect(hand2.match.rank).toBe(8);
      expect(hand2.cards.map((c) => c.used)).toEqual([
        true, true, false, true, true, true,
      ]);
    });

    it('should find a straight', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Hearts, Rank.Ten),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
      ]);
      expect(hand.match.hand).toBe(Hands.Straight);
      expect(hand.match.ranks).toEqual([12]);
      expect(hand.match.rank).toBe(4);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, true, true, true,
      ]);

      const lowStraight = new Hand([
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Spades, Rank.Two),
        new Card(Suit.Clubs, Rank.Three),
        new Card(Suit.Spades, Rank.Four),
        new Card(Suit.Spades, Rank.Five),
      ]);
      expect(lowStraight.match.hand).toBe(Hands.Straight);
      expect(lowStraight.match.ranks).toEqual([4]);
      expect(lowStraight.match.rank).toBe(4);
      expect(lowStraight.cards.map((c) => c.used)).toEqual([
        true, true, true, true, true,
      ]);

      const sevenCardStraight = new Hand([
        new Card(Suit.Spades, Rank.Eight),
        new Card(Suit.Spades, Rank.Seven),
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Hearts, Rank.Ten),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
      ]);
      expect(sevenCardStraight.match.hand).toBe(Hands.Flush);
      expect(sevenCardStraight.match.ranks).toEqual([12]);
      expect(sevenCardStraight.match.rank).toBe(5);
      expect(sevenCardStraight.cards.map((c) => c.used)).toEqual([
        true, false, true, false, true, true, true,
      ]);
    });

    it('should find a flush', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Three),
        new Card(Suit.Spades, Rank.Four),
        new Card(Suit.Spades, Rank.Eight),
        new Card(Suit.Spades, Rank.Ten),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
      ]);
      expect(hand.match.hand).toBe(Hands.Flush);
      expect(hand.match.ranks).toEqual([12]);
      expect(hand.match.rank).toBe(5);
      expect(hand.cards.map((c) => c.used)).toEqual([
        false, false, true, true, true, true, true,
      ]);
    });

    it('should find a full house', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Nine),
        new Card(Suit.Hearts, Rank.Nine),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
      ]);
      expect(hand.match.hand).toBe(Hands.FullHouse);
      expect(hand.match.ranks).toEqual([10, 8]);
      expect(hand.match.rank).toBe(6);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, true, true, true,
      ]);
    });

    it('should find a high card', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Ace),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.Four),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.match.hand).toBe(Hands.HighCard);
      expect(hand.match.ranks).toEqual([13, 12, 10, 8, 3]);
      expect(hand.match.rank).toBe(0);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, false, false, false, false,
      ]);
    });

    it('should find a pair', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.Four),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.match.hand).toBe(Hands.Pair);
      expect(hand.match.ranks).toEqual([10, 12, 8, 3]);
      expect(hand.match.rank).toBe(1);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, false, false, false,
      ]);

      const sevenCardPair = new Hand([
        new Card(Suit.Hearts, Rank.Ace),
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Diamonds, Rank.Six),
        new Card(Suit.Clubs, Rank.Two),
        new Card(Suit.Spades, Rank.Seven),
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Jack),
      ]);
      expect(sevenCardPair.match.hand).toBe(Hands.Pair);
      expect(sevenCardPair.match.ranks).toEqual([13, 10, 8, 6]);
      expect(sevenCardPair.match.rank).toBe(1);
      expect(sevenCardPair.cards.map((c) => c.used)).toEqual([
        true, true, false, false, false, false, false,
      ]);
    });

    it('should find two pair', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.King),
        new Card(Suit.Clubs, Rank.King),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.match.hand).toBe(Hands.TwoPair);
      expect(hand.match.ranks).toEqual([12, 10, 8]);
      expect(hand.match.rank).toBe(2);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, true, true, false,
      ]);
    });

    it('should find four of a kind', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Jack),
        new Card(Suit.Clubs, Rank.Jack),
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Seven),
        new Card(Suit.Spades, Rank.Two),
      ]);
      expect(hand.match.hand).toBe(Hands.FourOfAKind);
      expect(hand.match.ranks).toEqual([10, 8]);
      expect(hand.match.rank).toBe(7);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, true, true, false, false, false,
      ]);
    });

    it('should find three of a kind', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Jack),
        new Card(Suit.Clubs, Rank.Ten),
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Seven),
        new Card(Suit.Spades, Rank.Two),
      ]);
      expect(hand.match.hand).toBe(Hands.ThreeOfAKind);
      expect(hand.match.ranks).toEqual([10, 9, 8]);
      expect(hand.match.rank).toBe(3);
      expect(hand.cards.map((c) => c.used)).toEqual([
        true, true, true, false, false, false, false,
      ]);

      const hand2 = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Jack),
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Clubs, Rank.Ten),
      ]);
      expect(hand2.match.hand).toBe(Hands.ThreeOfAKind);
      expect(hand2.match.ranks).toEqual([10, 9, 8]);
      expect(hand2.match.rank).toBe(3);
      expect(hand2.toString()).toBe(
        'Three of a kind: Jack of Hearts,Jack of Spades,Jack of Diamonds,9 of Spades,10 of Clubs',
      );
      expect(hand2.cards.map((c) => c.used)).toEqual([
        true, true, true, false, false,
      ]);
    });
  });
});
