import { RelationType } from "./person-data";

export interface PersonConnection {
  relation: RelationType;
  onlyConsort?: boolean;
}
