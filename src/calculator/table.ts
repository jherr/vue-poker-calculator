import Card from './card';
import Hand from './hand';
import Deck from './deck';

export default class Table {
  constructor(baseCards: Card[], players: number = 9) {
    const deck = new Deck();
    deck.shuffle();

    baseCards.forEach((card) => deck.remove(card));

    const communityCards = deck.draw(5);

    const playerHand = new Hand([
      ...baseCards,
      ...communityCards,
    ]);

    const playerHands: Hand[] = [];
    for (let p = 0; p < players - 1; p++) {
      playerHands.push(new Hand([
        ...deck.draw(2),
        ...communityCards,
      ]));
    }
  }
}
