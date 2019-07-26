import Card, { Suit, Rank } from '@/calculator/card';
import Table from '@/calculator/table';

describe('Table', () => {
  it('can create a table', () => {
    const table = new Table([
      new Card(Suit.Spades, Rank.Ace),
      new Card(Suit.Hearts, Rank.Ace),
    ], 2);
    expect(table.hands.length).toBe(2);
  });
});
