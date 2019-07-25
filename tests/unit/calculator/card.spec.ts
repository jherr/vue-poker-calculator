import Card, { Suit, Rank } from '@/calculator/card';

describe('Card', () => {
  it('can create a card', () => {
    const card = new Card(Suit.Spades, Rank.Ace);
    expect(card.rank).toBe(Rank.Ace);
    expect(card.suit).toBe(Suit.Spades);
  });

  it('to have rank numbers', () => {
    expect((new Card(Suit.Spades, Rank.Ace)).rankNumber).toBe(0);
    expect((new Card(Suit.Spades, Rank.Two)).rankNumber).toBe(1);
  });

  it('can check for the same card', () => {
    expect(new Card(Suit.Spades, Rank.Ace).isSame(new Card(Suit.Spades, Rank.Ace))).toBe(true);
    expect(new Card(Suit.Spades, Rank.Two).isSame(new Card(Suit.Spades, Rank.Ace))).toBe(false);
    expect(new Card(Suit.Hearts, Rank.Ace).isSame(new Card(Suit.Spades, Rank.Ace))).toBe(false);
  });

  it('can check for the same suit', () => {
    expect(new Card(Suit.Spades, Rank.Ace).isSameSuit(new Card(Suit.Spades, Rank.Ace))).toBe(true);
    expect(new Card(Suit.Spades, Rank.Two).isSameSuit(new Card(Suit.Spades, Rank.Ace))).toBe(true);
    expect(new Card(Suit.Hearts, Rank.Ace).isSameSuit(new Card(Suit.Spades, Rank.Ace))).toBe(false);
    expect(new Card(Suit.Hearts, Rank.Two).isSameSuit(new Card(Suit.Spades, Rank.Ace))).toBe(false);
  });

  it('can check for the same rank', () => {
    expect(new Card(Suit.Spades, Rank.Ace).isSameRank(new Card(Suit.Spades, Rank.Ace))).toBe(true);
    expect(new Card(Suit.Hearts, Rank.Ace).isSameRank(new Card(Suit.Spades, Rank.Ace))).toBe(true);
    expect(new Card(Suit.Spades, Rank.Ace).isSameRank(new Card(Suit.Spades, Rank.Two))).toBe(false);
    expect(new Card(Suit.Hearts, Rank.Ace).isSameRank(new Card(Suit.Spades, Rank.Two))).toBe(false);
  });

  it('can create a card', () => {
    expect(new Card(Suit.Spades, Rank.Ace).toString()).toBe('Ace of Spades');
  });
});
