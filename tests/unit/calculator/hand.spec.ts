import Hand, { Hands } from '@/calculator/hand';
import Deck from '@/calculator/deck';
import Card, { Suit, Rank } from '@/calculator/card';

describe('Hand', () => {
  it('should make a hand', () => {
    const deck = new Deck();
    const hand = new Hand(deck.draw(5));
    expect(hand.cards.length).toBe(5);
  });

  describe('match all the hand types', () => {
    it('should find a royal straight flush', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Spades, Rank.Ten)
      ]);
      expect(hand.match.hand).toBe(Hands.RoyalStraightFlush);
      expect(hand.match.rank).toBe(9);
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
    });

    it('should find a straight', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Hearts, Rank.Ten),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
      ]);
      expect(hand.match.hand).toBe(Hands.Straight);
      expect(hand.match.ranks).toEqual([12]);
      expect(hand.match.rank).toBe(4);
    });

    it('should find a flush', () => {
      const hand = new Hand([
        new Card(Suit.Spades, Rank.Eight),
        new Card(Suit.Spades, Rank.Ten),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Spades, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
      ]);
      expect(hand.match.hand).toBe(Hands.Flush);
      expect(hand.match.ranks).toEqual([12]);
      expect(hand.match.rank).toBe(5);
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
    });

    it('should find four of a kind', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Jack),
        new Card(Suit.Clubs, Rank.Jack),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.match.hand).toBe(Hands.FourOfAKind);
      expect(hand.match.ranks).toEqual([10]);
      expect(hand.match.rank).toBe(7);
    });

    it('should find three of a kind', () => {
      const hand = new Hand([
        new Card(Suit.Hearts, Rank.Jack),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Diamonds, Rank.Jack),
        new Card(Suit.Clubs, Rank.Ten),
        new Card(Suit.Spades, Rank.Nine),
      ]);
      expect(hand.match.hand).toBe(Hands.ThreeOfAKind);
      expect(hand.match.ranks).toEqual([10, 9, 8]);
      expect(hand.match.rank).toBe(3);

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
      expect(hand2.toString()).toBe('Three of a kind: 9 of Spades,10 of Clubs,Jack of Diamonds,Jack of Spades,Jack of Hearts');
    });
  });
});
