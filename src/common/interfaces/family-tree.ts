import { PersonData } from "./person-data";

export interface FamilyNode {
  person: PersonData;
  consorts?: FamilyConsort[];
}

export interface FamilyConsort {
  person: PersonData;
  actualConsort?: boolean;
  children?: FamilyNode[];
}

export type FamilyTree = FamilyNode[];
