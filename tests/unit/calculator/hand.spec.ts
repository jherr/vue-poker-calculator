import Hand from '@/calculator/hand';
import Deck from '@/calculator/deck';

describe('Hand', () => {
  it('should make a hand', () => {
    const deck = new Deck();
    const hand = new Hand(deck.draw(5));
    expect(hand.cards.length).toBe(5);
  });
});
