import Deck from '@/calculator/deck';
import Card, { Suit, Rank } from '@/calculator/card';

describe('Deck', () => {
  it('can create a deck', () => {
    const deck = new Deck();
    expect(deck.cards.length).toBe(52);
  });

  it('can remove and find cards', () => {
    const deck = new Deck();
    deck.remove(new Card(Suit.Spades, Rank.Ace));
    expect(deck.cards.length).toBe(51);
    expect(deck.contains(new Card(Suit.Spades, Rank.Ace))).toBe(false);
    expect(deck.contains(new Card(Suit.Spades, Rank.Two))).toBe(true);
  });

  it('can shuffle a deck', () => {
    const unshuffled = new Deck();
    const shuffled = new Deck();
    shuffled.shuffle();
    expect(shuffled.cards).not.toEqual(unshuffled.cards);
  });
});
