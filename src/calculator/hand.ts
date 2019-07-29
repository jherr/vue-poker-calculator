import Card, { Rank, Suit, RankNumbers } from './card';
import Segment from './segment';
import MatchResult from './matchResult';
import { Hands } from './hands';
import { sortRanks } from './utilities';

type MatcherType = (hand: Hand) => MatchResult | undefined;

export default class Hand {
  public match: MatchResult = new MatchResult(Hands.HighCard, []);

  private high: number = -1;
  private suits: Suit[] = [];
  private straightEnd: number = -1;
  private rankCounts: any = {};

  constructor(public cards: Card[], public playerHand: boolean = false) {
    const suitsHash: any = {};

    const segments: Segment[] = [];
    let start = this.cards[0].rankNumber;
    let end = this.cards[0].rankNumber;

    const sortedCards = this.cards
      .slice()
      .sort((a, b) => a.rankNumber < b.rankNumber ? -1 : 1);
    this.high = sortedCards[this.cards.length - 1].rankNumber;
    sortedCards.forEach((card) => {
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
      if (suitsHash[card.suit.toString()] === undefined) {
        suitsHash[card.suit.toString()] = 0;
      }
      suitsHash[card.suit.toString()] += 1;
    });
    segments.push(new Segment(start, end));

    // Look for straights without an Ace
    segments
      .filter((segment) => (segment.end - segment.start) >= 4)
      .forEach((segment) => {
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
    this.suits = Object.keys(suitsHash)
      .filter((suit: string) => suitsHash[suit] > 4)
      .map((suit: string) => suit as Suit);

    this.cards.forEach((c) => c.used = false);
    this.findMatch();
  }

  public compare(otherHand: Hand): number {
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
    return `${this.match.hand.toString()}: ${this.cards.map((c) => c.toString()).join(',')}`;
  }

  private findRankCounts(count: number): number[] {
    return Object.keys(this.rankCounts)
      .filter((rank) => this.rankCounts[rank] === count)
      .map((rank) => parseInt(rank, 10));
  }

  private hasRank(rank: Rank): boolean {
    return this.cards.filter((c) => c.rank === rank).length > 0;
  }

  private matchRankPattern(ranks: Rank[]): boolean {
    let matched = 0;
    ranks.forEach((r) => {
      if (this.hasRank(r)) {
        matched++;
      }
    });
    return matched === 5;
  }

  private findMatch() {
    this.royalStraightFlushMatcher();
    this.straightFlushMatcher();
    this.fourOfAKindMatcher();
    this.fullHouseMatcher();
    this.flushMatcher();
    this.straightMatcher();
    this.threeOfAKindMatcher();
    this.twoPairMatcher();
    this.pairMatcher();
    this.highCardMatcher();
  }

  /**
   * See if all the cards in the straights also have cards that are in-suit
   */
  private isStraightAlsoFlush(): boolean {
    const usedRank: any = {};
    for (let r = this.straightEnd - 4; r < this.straightEnd; r += 1) {
      usedRank[r] = false;
    }
    this.cards.forEach((card) => {
      const adjustedNumber =
        card.rankNumber === 0 && this.straightEnd >= RankNumbers[Rank.AceHigh] ?
          RankNumbers[Rank.AceHigh] : card.rankNumber;
      if (
        adjustedNumber > this.straightEnd - 5 &&
        card.suit === this.suits[0]
      ) {
        usedRank[adjustedNumber] = true;
      }
    });
    let hasAllInSuits = true;
    Object.keys(usedRank).forEach((rank: string) => {
      if (usedRank[rank] === false) {
        hasAllInSuits = false;
      }
    });
    return hasAllInSuits;
  }

  private royalStraightFlushMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.straightEnd === RankNumbers[Rank.AceHigh] && this.suits.length === 1 && this.isStraightAlsoFlush()) {
        this.match = new MatchResult(Hands.RoyalStraightFlush, [this.straightEnd]);
        this.markStraightUsed();
      }
    }
  }

  private straightFlushMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.straightEnd > -1 && this.suits.length === 1 && this.isStraightAlsoFlush()) {
        this.match = new MatchResult(Hands.StraightFlush, [this.straightEnd]);
        this.markStraightUsed();
      }
    }
  }

  private straightMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.straightEnd > -1) {
        this.match = new MatchResult(Hands.Straight, [this.straightEnd]);
        this.markStraightUsed();
      }
    }
  }

  private flushMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.suits.length === 1) {
        this.match = new MatchResult(Hands.Flush, [this.high]);
        this.markFlush(this.suits[0]);
      }
    }
  }

  private fullHouseMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.findRankCounts(3).length === 1 && this.findRankCounts(2).length === 1) {
        this.match = new MatchResult(Hands.FullHouse, [
          this.findRankCounts(3)[0],
          this.findRankCounts(2)[0],
        ]);
        this.markUsedByRankNumber(this.findRankCounts(3)[0]);
        this.markUsedByRankNumber(this.findRankCounts(2)[0]);
      }
    }
  }

  private fourOfAKindMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.findRankCounts(4).length === 1) {
        this.match = new MatchResult(Hands.FourOfAKind, [
          this.findRankCounts(4)[0],
          ...sortRanks(this.findRankCounts(1)).slice(0, 1),
        ]);
        this.markUsedByRankNumber(this.findRankCounts(4)[0]);
      }
    }
  }

  private threeOfAKindMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.findRankCounts(3).length === 1) {
        this.match = new MatchResult(Hands.ThreeOfAKind, [
          this.findRankCounts(3)[0],
          ...sortRanks(this.findRankCounts(1)).slice(0, 2),
        ]);
        this.markUsedByRankNumber(this.findRankCounts(3)[0]);
      }
    }
  }

  private twoPairMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.findRankCounts(2).length >= 2) {
        const sortedRankCounts = sortRanks(this.findRankCounts(2));
        this.match = new MatchResult(Hands.TwoPair, [
          ...sortedRankCounts.slice(0, 2),
          ...this.findRankCounts(1).slice(0, 1),
        ]);
        this.markUsedByRankNumber(sortedRankCounts[0]);
        this.markUsedByRankNumber(sortedRankCounts[1]);
      }
    }
  }

  private pairMatcher() {
    if (this.match.hand === Hands.HighCard) {
      if (this.findRankCounts(2).length === 1) {
        this.match = new MatchResult(Hands.Pair, [
          ...this.findRankCounts(2),
          ...sortRanks(this.findRankCounts(1)).slice(0, 3),
        ]);
        this.markUsedByRankNumber(this.findRankCounts(2)[0]);
      }
    }
  }

  private highCardMatcher() {
    if (this.match.hand === Hands.HighCard) {
      this.match = new MatchResult(Hands.HighCard, sortRanks(this.findRankCounts(1)));
      this.markUsedByRankNumber(this.findRankCounts(1)[0]);
    }
  }

  private markFlush(suit: Suit) {
    let count = 0;
    const sortedCards = this.cards
      .slice()
      .sort((a, b) => a.rankNumber < b.rankNumber ? 1 : -1);
    sortedCards.forEach((card) => {
      if (card.suit === suit && count < 5) {
        card.used = true;
        count += 1;
      }
    });
  }

  private markStraightUsed() {
    const usedRank: any = {};
    this.cards.forEach((card) => {
      const adjustedNumber =
        card.rankNumber === 0 && this.straightEnd >= RankNumbers[Rank.AceHigh] ?
          RankNumbers[Rank.AceHigh] : card.rankNumber;
      if (
        adjustedNumber >= (this.straightEnd - 4) &&
        adjustedNumber <= this.straightEnd &&
        !usedRank[adjustedNumber]
      ) {
        card.used = true;
        usedRank[adjustedNumber] = true;
      }
    });
  }

  private markUsedByRankNumber(rank: number) {
    const adjustedRank = rank === RankNumbers[Rank.AceHigh] ? RankNumbers[Rank.Ace] : rank;
    this.cards.forEach((card) => {
      if (card.rankNumber === adjustedRank) {
        card.used = true;
      }
    });
  }
}
