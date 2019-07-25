import Card, { Suit, Suits, Rank, Ranks } from './card';

const defaultDeck : Card[] = ([] as Card[]).concat(
  ...Suits.map((suit: Suit) : Card[] => 
    Ranks.map((rank: Rank) : Card => 
      new Card(suit, rank),
    ),
  )
);

export default class Deck {
  public cards : Card[] = defaultDeck.slice();
  
  public shuffle() {
    interface SortableCard {
      value: number,
      card: Card,
    };
    this.cards = this.cards
      .map((card: Card) : SortableCard => ({
        value: Math.random(),
        card,
      }))
      .sort((a: SortableCard, b:SortableCard) : number => (a.value < b.value) ? -1 : 1)
      .map((a: SortableCard) : Card => a.card);
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
