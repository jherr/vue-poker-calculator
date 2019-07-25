import { Hands, HandRanks } from './hands';
import { promoteAce } from './utilities';

export default class MatchResult {
  public rank: number = -1;
  public ranks: number[];
  public constructor(public hand: Hands, ranks: number[]) {
    HandRanks.forEach((rankHand, index) => {
      if (hand === rankHand) {
        this.rank = index;
      }
    });
    this.ranks = promoteAce(ranks);
  }
}
