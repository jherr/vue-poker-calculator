import Card, { Rank, Suit } from './card';

enum Hands {
  RoyalStraightFlush = 'Royal straight flush',
  StraightFlush = 'Straight flush',
  FourOfAKind = 'Four of a kind',
  FullHouse = 'Full house',
  Flush = 'Flush',
  Straight = 'Straight',
  ThreeOfAKind = 'Three of a kind',
  TwoPair = 'Two pair',
  Pair = 'Pair',
  HighCard = 'High card'
};

const HandRanks = [
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

class MatchResult {
  public constructor(public hand : Hands, public ranks : number[]) {}
}

const FlushMatcher = (hand : Hand) => 
  hand.suits.length === 1 ? new MatchResult(Hands.Flush, []) : undefined;
const FourOfAKindMatcher = (hand : Hand) => 
  hand.findRankCounts(4).length === 1 ? new MatchResult(Hands.FourOfAKind, hand.findRankCounts(4)) : undefined;
const ThreeOfAKindMatcher = (hand : Hand) => 
  hand.findRankCounts(3).length === 1 ? new MatchResult(Hands.ThreeOfAKind, hand.findRankCounts(3)) : undefined;
const TwoPairMatcher = (hand : Hand) => 
  hand.findRankCounts(2).length === 2 ? new MatchResult(Hands.TwoPair, hand.findRankCounts(2)) : undefined;
const PairMatcher = (hand : Hand) => 
  hand.findRankCounts(2).length === 1 ? new MatchResult(Hands.Pair, hand.findRankCounts(2)) : undefined;
const HighCardMatcher = (hand : Hand) => 
  new MatchResult(Hands.HighCard, [hand.high]);

export default class Hand {
  public rankCounts : any = {};
  public low : number = -1;
  public high : number = -1;
  public suits : Suit[] = [];

  constructor(public cards : Card[]) {
    this.cards = this.cards
      .sort((a, b) => a.rankNumber < b.rankNumber ? -1 : 1);
   
    this.low = 1000;
    this.high = 0;
    
    const suitsHash : any = {};
   
    this.cards.forEach(card => {
      this.low = Math.min(card.rankNumber, this.low);
      this.high = Math.max(card.rankNumber, this.high);
      if (this.rankCounts[card.rankNumber] === undefined) {
        this.rankCounts[card.rankNumber] = 0;
      }
      this.rankCounts[card.rankNumber] += 1;
      suitsHash[card.suit.toString()] = true;
    });

    this.suits = Object.keys(suitsHash).map((suit : string) => suit as Suit);
  }

  public hasRank(rank: Rank) : boolean {
    return this.cards.filter(c => c.rank === rank).length > 0;
  }

  public matchRankPattern(ranks: Rank[]) : boolean {
    let matched = 0;
    ranks.forEach(r => {
      if (this.hasRank(r)) {
        matched++;
      }
    });
    return matched === 5;
  }

  public findRankCounts(count: number) : number[] {
    return Object.keys(this.rankCounts)
      .filter(rank => this.rankCounts[rank] === count)
      .map(rank => parseInt(rank, 10));
  }

  public toString() {
    return this.cards.map(c => c.toString()).join(',');
  }
}
