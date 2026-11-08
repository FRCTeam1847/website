import type BaAward from "./BaAward";
import type BaEvent from "./BaEvent";

export default interface BaTeamHistory {
  awards: BaAward[];
  events: BaEvent[];
}
