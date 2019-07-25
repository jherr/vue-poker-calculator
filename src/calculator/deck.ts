import Card, { Suit, Suits, Rank, Ranks } from './card';

const defaultDeck : Card[] = ([] as Card[]).concat(
  ...Suits.map(suit => 
    Ranks.map(rank => 
      new Card(suit, rank),
    ),
  )
);

export default class Deck {
  public cards : Card[] = defaultDeck.slice();
  
  public shuffle() {
    this.cards = this.cards
      .map(card => ({
        value: Math.random(),
        card,
      }))
      .sort((a, b) => (a.value < b.value) ? -1 : 1)
      .map(a => a.card);
  }

  public remove(card: Card) {
    this.cards = this.cards
      .filter(c => !c.isSame(card));
  }

  public contains(card: Card) : boolean {
    return this.cards.find(c => c.isSame(card)) !== undefined;
  }

  public draw(count: number) : Card[] {
    return this.cards.slice(0, count);
  }
}
