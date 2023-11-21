import jsPlumb from "jsplumb";
import { ElementID } from "../interfaces/constantes";
import { PersonConnection } from "../interfaces/perso-connection";
import { RELATIONS } from "../interfaces/person-data";

export function generateConnectParams(
  source: ElementID,
  target: ElementID,
  targetConnection: PersonConnection
): jsPlumb.ConnectParams {
  const connectParams: jsPlumb.ConnectParams = {
    source: source,
    target: target,
  };

  switch (targetConnection.relation) {
    case RELATIONS.CHILD:
      connectParams.cssClass = "connection-child";
      break;
    case RELATIONS.MARRIED:
      connectParams.cssClass = "connection-married";
      break;
    case RELATIONS.EX:
      connectParams.cssClass = "connection-ex";
      break;
  }

  if (targetConnection?.onlyConsort) {
    connectParams.anchors = ["LeftMiddle", "RightMiddle"];
  }

  if (
    targetConnection?.relation === RELATIONS.EX ||
    targetConnection?.relation === RELATIONS.MARRIED
  ) {
    connectParams.connector = "Straight";
    connectParams.anchors = ["LeftMiddle", "RightMiddle"];
  }

  return connectParams;
}
