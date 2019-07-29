import Card from './card';
import Hand from './hand';
import Deck from './deck';
import { cloneDeep } from 'lodash';

export default class Table {
  public hands: Hand[] = [];

  public won: boolean = false;
  public wonAfterFlop: boolean = false;
  public wonAfterTurn: boolean = false;

  public communityCards: Card[] = [];

  constructor(baseCards: Card[], players: number = 9) {
    const deck = new Deck();
    deck.shuffle();

    baseCards.forEach((card) => deck.remove(card));

    // Simulate the flop and set up initial hands
    this.communityCards = deck.draw(3);

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

    this.wonAfterFlop = this.hands[0].playerHand === true;

    // Simulate the turn and river
    for (let i = 0; i < 2; i++) {
      const newCards = deck.draw(1);
      this.communityCards.push(cloneDeep(newCards)[0]);
      this.hands = this.hands.map(
        (hand: Hand) => new Hand([
          ...hand.cards,
          ...cloneDeep(newCards),
        ], hand.playerHand),
      );
      this.hands = this.hands.sort((a, b) => b.compare(a));

      if (i === 0) {
        this.wonAfterTurn = this.hands[0].playerHand === true;
      } else {
        this.won = this.hands[0].playerHand === true;
      }
    }
  }
}
