// data/index.ts
import { fzMembers } from "./fzMembers";
import { ctMembers } from "./ctMembers";
import { ssMembers } from "./ssMembers";
import { csMembers } from "./csMembers";

export const teamsData: Record<string, any[]> = {
  FruitsZipper: fzMembers,
  CandyTune: ctMembers,
  SweetSteady: ssMembers,
  CutieStreet: csMembers,
};
