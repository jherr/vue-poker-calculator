import Card from './card';
import Hand from './hand';
import Deck from './deck';

export default class Table {
  public hands: Hand[] = [];
  public won: boolean = false;
  public communityCards: Card[] = [];

  constructor(baseCards: Card[], players: number = 9) {
    const deck = new Deck();
    deck.shuffle();

    baseCards.forEach((card) => deck.remove(card));

    this.communityCards = deck.draw(5);

    this.hands.push(new Hand([
      ...baseCards,
      ...this.communityCards.slice(),
    ], true));

    for (let p = 0; p < players - 1; p++) {
      this.hands.push(new Hand([
        ...deck.draw(2),
        ...this.communityCards.slice(),
      ]));
    }

    this.hands = this.hands.sort((a, b) => b.compare(a));

    this.won = this.hands[0].playerHand === true;
  }
}
