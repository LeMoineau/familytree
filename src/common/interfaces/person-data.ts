import { ElementID } from "./constantes";

export const GENDERS: { MALE: Gender; FEMALE: Gender; OTHER: Gender } = {
  MALE: 0,
  FEMALE: 1,
  OTHER: 2,
};

export const RELATIONS: {
  MARRIED: RelationType;
  EX: RelationType;
  CHILD: RelationType;
} = {
  MARRIED: 0,
  EX: 1,
  CHILD: 2,
};

export type Gender = number;
export type RelationType = number;

export interface PersonData {
  firstname: string;
  lastname?: string;
  gender: Gender;
  id: ElementID;
  birthDate?: Date;
  deathDate?: Date;
}
