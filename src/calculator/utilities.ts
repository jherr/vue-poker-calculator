import { Rank, RankNumbers } from './card';

export const promoteAce = (ranks: number[]) => ranks
  .map((r) => r === RankNumbers.Ace ? RankNumbers[Rank.AceHigh] : r);

export const sortRanks = (ranks: number[]) =>
  promoteAce(ranks).sort((a, b) => a < b ? 1 : -1);
