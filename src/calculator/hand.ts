import Card, { Rank, Suit, RankNumbers } from './card';

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

class Segment {
  public constructor(public start : number, public end : number) {
  }
}

const promoteAce = (ranks: number[]) => ranks
  .map(r => r === RankNumbers.Ace ? RankNumbers[Rank.AceHigh] : r);

const sortRanks = (ranks: number[]) =>
  promoteAce(ranks).sort((a, b) => a < b ? 1 : -1);

class MatchResult {
  public rank: number = -1;
  public ranks : number[];
  public constructor(public hand : Hands, ranks : number[]) {
    HandRanks.forEach((rankHand, index) => {
      if (hand === rankHand) {
        this.rank = index;
      }
    })
    this.ranks = promoteAce(ranks); 
  }
}

type MatcherType = (hand : Hand) => MatchResult | undefined;

export default class Hand {
  public match : MatchResult = new MatchResult(Hands.HighCard, []);

  private high : number = -1;
  private suits : Suit[] = [];
  private straightEnd : number = -1;

  private rankCounts : any = {};

  private matchers : MatcherType[] = [
    Hand.royalStraightFlushMatcher,
    Hand.straightFlushMatcher,
    Hand.fourOfAKindMatcher,
    Hand.fullHouseMatcher,
    Hand.flushMatcher,
    Hand.straightMatcher,
    Hand.threeOfAKindMatcher,
    Hand.twoPairMatcher,
    Hand.pairMatcher,
    Hand.highCardMatcher,
  ];

  constructor(public cards : Card[]) {
    this.cards = this.cards
      .sort((a, b) => a.rankNumber < b.rankNumber ? -1 : 1);
   
    this.high = this.cards[this.cards.length - 1].rankNumber;
    
    const suitsHash : any = {};
  
    const segments : Segment[] = [];
    let start = this.cards[0].rankNumber;
    let end = this.cards[0].rankNumber;
   
    this.cards.forEach(card => {
      // Calculate straight segments
      if (card.rankNumber - end > 1) {
        segments.push(new Segment(start, end));
        start = card.rankNumber;
        end = card.rankNumber;
      } else {
        end = card.rankNumber;
      }

      // Calculate the counts of each rank
      if (this.rankCounts[card.rankNumber] === undefined) {
        this.rankCounts[card.rankNumber] = 0;
      }
      this.rankCounts[card.rankNumber] += 1;

      // Check to see how many suits are represented
      suitsHash[card.suit.toString()] = true;
    });
    segments.push(new Segment(start, end));

    // Look for straights without an Ace
    segments
      .filter(segment => (segment.end - segment.start) >= 4)
      .forEach(segment => {
        this.straightEnd = segment.end;
      });

    // Look for straights with an Ace
    if (this.matchRankPattern([
      Rank.Ten,
      Rank.Jack,
      Rank.Queen,
      Rank.King,
      Rank.Ace,
    ])) {
      this.straightEnd = RankNumbers[Rank.AceHigh];
    }

    // Complete suit assigment
    this.suits = Object.keys(suitsHash).map((suit : string) => suit as Suit);

    // Match the hand
    let found = false;
    this.matchers.forEach(matcher => {
      if (!found) {
        const match = matcher(this);
        if (match) {
          this.match = match;
          found = true;
        }
      }
    });
  }

  public compare(otherHand: Hand) : number {
    // First look for a straight rank beat (two pair beats pair)
    if (this.match.rank > otherHand.match.rank) {
      return 1;
    }
    if (this.match.rank < otherHand.match.rank) {
      return -1;
    }

    // Then look for the extra rank elements when it comes to two hands of the same type
    let comparison = 0;
    this.match.ranks.forEach((myRank, index) => {
      if (comparison === 0) {
        if (myRank > otherHand.match.ranks[index]) {
          comparison = 1;
        }
        if (myRank < otherHand.match.ranks[index]) {
          comparison = -1;
        }
      }
    });

    return comparison;
  }

  public toString() {
    return `${this.match.hand.toString()}: ${this.cards.map(c => c.toString()).join(',')}`;
  }

  private findRankCounts(count: number) : number[] {
    return Object.keys(this.rankCounts)
      .filter(rank => this.rankCounts[rank] === count)
      .map(rank => parseInt(rank, 10));
  }

  private hasRank(rank: Rank) : boolean {
    return this.cards.filter(c => c.rank === rank).length > 0;
  }

  private matchRankPattern(ranks: Rank[]) : boolean {
    let matched = 0;
    ranks.forEach(r => {
      if (this.hasRank(r)) {
        matched++;
      }
    });
    return matched === 5;
  }

  private static royalStraightFlushMatcher = (hand : Hand) => 
    hand.straightEnd === RankNumbers[Rank.AceHigh] && hand.suits.length === 1 ?
      new MatchResult(Hands.RoyalStraightFlush, [hand.straightEnd]) : undefined;

  private static straightFlushMatcher = (hand : Hand) => 
    hand.straightEnd > -1 && hand.suits.length === 1 ?
      new MatchResult(Hands.StraightFlush, [hand.straightEnd]) : undefined;

  private static straightMatcher = (hand : Hand) => 
    hand.straightEnd > -1 ?
      new MatchResult(Hands.Straight, [hand.straightEnd]) : undefined;

  private static flushMatcher = (hand : Hand) => 
    hand.suits.length === 1 ?
      new MatchResult(Hands.Flush, [hand.high]) : undefined;

  private static fullHouseMatcher = (hand : Hand) => 
    hand.findRankCounts(3).length === 1 && hand.findRankCounts(2).length === 1 ?
      new MatchResult(Hands.FullHouse, [
        hand.findRankCounts(3)[0],
        hand.findRankCounts(2)[0]
      ]) : undefined;

  private static fourOfAKindMatcher = (hand : Hand) => 
    hand.findRankCounts(4).length === 1 ?
      new MatchResult(Hands.FourOfAKind, [
        hand.findRankCounts(4)[0],
        ...sortRanks(hand.findRankCounts(1)),
      ]) : undefined;

  private static threeOfAKindMatcher = (hand : Hand) => 
    hand.findRankCounts(3).length === 1 ?
      new MatchResult(Hands.ThreeOfAKind, [
        hand.findRankCounts(3)[0],
        ...sortRanks(hand.findRankCounts(1))
      ]) : undefined;

  private static twoPairMatcher = (hand : Hand) => 
    hand.findRankCounts(2).length === 2 ?
      new MatchResult(Hands.TwoPair, [
        ...sortRanks(hand.findRankCounts(2)),
        ...hand.findRankCounts(1),
      ]) : undefined;

  private static pairMatcher = (hand : Hand) => 
    hand.findRankCounts(2).length === 1 ?
      new MatchResult(Hands.Pair, [
        ...hand.findRankCounts(2),
        ...sortRanks(hand.findRankCounts(1)),
      ]) : undefined;

  private static highCardMatcher = (hand : Hand) => 
    new MatchResult(Hands.HighCard, sortRanks(hand.findRankCounts(1)));
}
