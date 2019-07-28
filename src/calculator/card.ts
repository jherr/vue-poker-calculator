export enum Rank {
  Ace = 'Ace',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King',
  AceHigh = 'Ace high',
}

export const Ranks: Rank[] = [
  Rank.Ace,
  Rank.Two,
  Rank.Three,
  Rank.Four,
  Rank.Five,
  Rank.Six,
  Rank.Seven,
  Rank.Eight,
  Rank.Nine,
  Rank.Ten,
  Rank.Jack,
  Rank.Queen,
  Rank.King,
  Rank.AceHigh,
];

export enum Suit {
  Hearts = 'Hearts',
  Spades = 'Spades',
  Clubs = 'Clubs',
  Diamonds = 'Diamonds',
}

export const Suits: Suit[] = [
  Suit.Hearts,
  Suit.Spades,
  Suit.Clubs,
  Suit.Diamonds,
];

export const RankNumbers: any = {};
Ranks.forEach((rank, i) => RankNumbers[rank.toString()] = i);

export default class Card {
  public rankNumber: number = 0;

  constructor(
    public suit: Suit,
    public rank: Rank,
    public used: boolean = false,
  ) {
    this.rankNumber = RankNumbers[rank.toString()];
  }

  public isSameSuit(card: Card): boolean {
    return card.suit === this.suit;
  }

  public isSameRank(card: Card): boolean {
    return card.rank === this.rank;
  }

  public isSame(card: Card): boolean {
    return card.rank === this.rank && card.suit === this.suit;
  }

  public toString(): string {
    return `${this.rank} of ${this.suit}`;
  }
}
