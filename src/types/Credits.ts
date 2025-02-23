import { CastMember } from "./Cast";
import { CrewMember } from "./Crew";

export interface MovieCredits {
  cast: CastMember[];
  crew: CrewMember[];
}
