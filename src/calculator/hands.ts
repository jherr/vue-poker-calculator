export enum Hands {
  RoyalStraightFlush = 'Royal straight flush',
  StraightFlush = 'Straight flush',
  FourOfAKind = 'Four of a kind',
  FullHouse = 'Full house',
  Flush = 'Flush',
  Straight = 'Straight',
  ThreeOfAKind = 'Three of a kind',
  TwoPair = 'Two pair',
  Pair = 'Pair',
  HighCard = 'High card',
}

export const HandRanks = [
  Hands.HighCard,
  Hands.Pair,
  Hands.TwoPair,
  Hands.ThreeOfAKind,
  Hands.Straight,
  Hands.Flush,
  Hands.FullHouse,
  Hands.FourOfAKind,
  Hands.StraightFlush,
  Hands.RoyalStraightFlush,
];
