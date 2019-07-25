import Card, { Rank } from './card';

export default class Hand {
  public rankCounts : any = {};
  public low : number = -1;
  public high : number = -1;

  constructor(public cards : Card[]) {
    this.cards = this.cards
      .sort((a, b) => a.rankNumber < b.rankNumber ? -1 : 1);
    this.low = 1000;
    this.high = 0;
    this.cards.forEach(card => {
      this.low = Math.min(card.rankNumber, this.low);
      this.high = Math.max(card.rankNumber, this.high);
      if (this.rankCounts[card.rankNumber] === undefined) {
        this.rankCounts[card.rankNumber] = 0;
      }
      this.rankCounts[card.rankNumber] += 1;
    });
  }

  public hasRank(rank: Rank) : boolean {
    return this.cards.filter(c => c.rank === rank).length > 0;
  }

  public matchRankPattern(ranks: Rank[]) : boolean {
    let matched = true;
    ranks.forEach(r => {
      if (this.hasRank(r) === false) {
        matched = false;
      }
    });
    return matched;
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
