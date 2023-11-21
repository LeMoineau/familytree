import { jsPlumbInstance } from "jsplumb";
import { ElementID } from "../interfaces/constantes";
import { FamilyNode } from "../interfaces/family-tree";
import Family from "./Family";
import { getIndexString } from "../utils/useIndex";

export default function Children({
  children,
  parent,
  instance,
}: {
  children?: FamilyNode[];
  parent: ElementID;
  instance: jsPlumbInstance;
}) {
  return (
    <div className="row">
      {children?.map((child) => {
        return (
          <Family
            family={child}
            instance={instance}
            parent={parent}
            key={getIndexString()}
          ></Family>
        );
      })}
    </div>
  );
}
