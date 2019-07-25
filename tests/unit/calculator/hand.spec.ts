import Hand from '@/calculator/hand';
import Deck from '@/calculator/deck';
import Card, { Suit, Rank } from '@/calculator/card';

describe('Hand', () => {
  it('should make a hand', () => {
    const deck = new Deck();
    const hand = new Hand(deck.draw(5));
    expect(hand.cards.length).toBe(5);
  });

  describe('basic accessors', () => {
    it('should find specific rank patterns', () => {
      const higherStraight = new Hand([
        new Card(Suit.Spades, Rank.Six),
        new Card(Suit.Hearts, Rank.Seven),
        new Card(Suit.Spades, Rank.Eight),
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Ten)
      ]);
      expect(higherStraight.matchRankPattern([
        Rank.Six,
        Rank.Seven,
        Rank.Eight,
        Rank.Nine,
        Rank.Ten,
      ])).toBe(true);
      expect(higherStraight.matchRankPattern([
        Rank.Three,
        Rank.Seven,
        Rank.Eight,
        Rank.Nine,
        Rank.Ten,
      ])).toBe(false);

      const royalStraight = new Hand([
        new Card(Suit.Spades, Rank.Ten),
        new Card(Suit.Spades, Rank.Jack),
        new Card(Suit.Hearts, Rank.Queen),
        new Card(Suit.Spades, Rank.King),
        new Card(Suit.Spades, Rank.Ace)
      ]);
      expect(royalStraight.matchRankPattern([
        Rank.Ten,
        Rank.Jack,
        Rank.Queen,
        Rank.King,
        Rank.Ace,
      ])).toBe(true);
      expect(royalStraight.matchRankPattern([
        Rank.Three,
        Rank.Seven,
        Rank.Eight,
        Rank.Nine,
        Rank.Ten,
      ])).toBe(false);
    });

    it('should find low and high', () => {
      const pair = new Hand([
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Hearts, Rank.Ace),
        new Card(Suit.Spades, Rank.Two),
        new Card(Suit.Spades, Rank.Three),
        new Card(Suit.Spades, Rank.Four)
      ]);
      expect(pair.low).toBe(0);
      expect(pair.high).toBe(3);

      const higherStraight = new Hand([
        new Card(Suit.Spades, Rank.Six),
        new Card(Suit.Hearts, Rank.Seven),
        new Card(Suit.Spades, Rank.Eight),
        new Card(Suit.Spades, Rank.Nine),
        new Card(Suit.Spades, Rank.Ten)
      ]);
      expect(higherStraight.low).toBe(5);
      expect(higherStraight.high).toBe(9);
    });

    it('should find pairs, threes of a kind, etc.', () => {
      const pair = new Hand([
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Hearts, Rank.Ace),
        new Card(Suit.Spades, Rank.Two),
        new Card(Suit.Spades, Rank.Three),
        new Card(Suit.Spades, Rank.Four)
      ]);
      expect(pair.findRankCounts(1)).toEqual([1, 2, 3]);
      expect(pair.findRankCounts(2)).toEqual([0]);
      expect(pair.findRankCounts(3)).toEqual([]);
      expect(pair.findRankCounts(4)).toEqual([]);

      expect(pair.toString()).toBe('Ace of Hearts,Ace of Spades,2 of Spades,3 of Spades,4 of Spades');

      const three = new Hand([
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Hearts, Rank.Ace),
        new Card(Suit.Clubs, Rank.Ace),
        new Card(Suit.Spades, Rank.Two),
        new Card(Suit.Spades, Rank.Three)
      ]);
      expect(three.findRankCounts(1)).toEqual([1, 2]);
      expect(three.findRankCounts(2)).toEqual([]);
      expect(three.findRankCounts(3)).toEqual([0]);
      expect(three.findRankCounts(4)).toEqual([]);

      const four = new Hand([
        new Card(Suit.Spades, Rank.Ace),
        new Card(Suit.Hearts, Rank.Ace),
        new Card(Suit.Clubs, Rank.Ace),
        new Card(Suit.Diamonds, Rank.Ace),
        new Card(Suit.Spades, Rank.Two)
      ]);
      expect(four.findRankCounts(1)).toEqual([1]);
      expect(four.findRankCounts(2)).toEqual([]);
      expect(four.findRankCounts(3)).toEqual([]);
      expect(four.findRankCounts(4)).toEqual([0]);
    });
  });
});
