import Card from './card';
import Hand from './hand';
import Deck from './deck';
import { cloneDeep } from 'lodash';

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
      ...cloneDeep(baseCards),
      ...cloneDeep(this.communityCards),
    ], true));

    for (let p = 0; p < players - 1; p++) {
      this.hands.push(new Hand([
        ...cloneDeep(deck.draw(2).slice()),
        ...cloneDeep(this.communityCards),
      ]));
    }

    this.hands = this.hands.sort((a, b) => b.compare(a));

    this.won = this.hands[0].playerHand === true;
  }
}
