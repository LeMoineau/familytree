import { jsPlumbInstance } from "jsplumb";
import { FamilyNode } from "../interfaces/family-tree";
import Person from "./person/Person";
import { ElementID } from "../interfaces/constantes";
import Children from "./Children";
import { getIndexString } from "../utils/useIndex";
import { RELATIONS } from "../interfaces/person-data";

export default function Family({
  instance,
  family,
  parent,
}: {
  instance: jsPlumbInstance;
  family: FamilyNode;
  parent?: ElementID;
}) {
  const parentIndex = getIndexString();

  const currentParent = (
    <Person
      instance={instance}
      personData={family.person}
      source={family.person.id}
      target={parent}
      targetConnection={{
        relation: RELATIONS.CHILD,
      }}
    ></Person>
  );

  return (
    <div className="col">
      {/* Parent seul sans consort */}
      {(!family.consorts || family.consorts.length <= 0) && (
        <div id={parentIndex} className="mt-8 mx-4">
          {currentParent}
        </div>
      )}
      {/* Parent avec un seul conjoint */}
      {family.consorts && family.consorts.length === 1 && (
        <>
          <div
            className="row my-5 mx-4 p-3 drop-shadow bg-white rounded"
            id={parentIndex}
          >
            {currentParent}
            <Person
              instance={instance}
              personData={family.consorts[0].person}
              source={family.consorts[0].person.id}
              target={family.person.id}
              targetConnection={{
                relation: RELATIONS.MARRIED,
                onlyConsort: true,
              }}
            ></Person>
          </div>
          <Children
            children={family.consorts[0].children}
            parent={parentIndex}
            instance={instance}
          ></Children>
        </>
      )}
      {/* Parent avec plus de 1 conjoints */}
      {family.consorts && family.consorts.length > 1 && (
        <>
          <div
            className="row my-5 mx-4 p-3 drop-shadow bg-white rounded"
            id={parentIndex}
          >
            {currentParent}
            {family.consorts
              .filter((c) => c.actualConsort)
              .map((c) => {
                return (
                  <div className="col" key={getIndexString()}>
                    <Person
                      instance={instance}
                      personData={c.person}
                      source={c.person.id}
                      target={family.person.id}
                      targetConnection={{
                        relation: RELATIONS.MARRIED,
                      }}
                    ></Person>
                  </div>
                );
              })}
            {family.consorts
              .filter((c) => !c.actualConsort)
              .map((c) => {
                return (
                  <div className="col" key={getIndexString()}>
                    <Person
                      instance={instance}
                      personData={c.person}
                      source={c.person.id}
                      target={family.person.id}
                      targetConnection={{
                        relation: RELATIONS.EX,
                      }}
                    ></Person>
                  </div>
                );
              })}
          </div>
          {family.consorts.map((c) => {
            return (
              <Children
                children={c.children}
                parent={parentIndex}
                instance={instance}
                key={getIndexString()}
              ></Children>
            );
          })}
        </>
      )}
    </div>
  );
}
