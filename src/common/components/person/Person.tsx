import { jsPlumbInstance } from "jsplumb";
import { PersonData, RELATIONS } from "../../interfaces/person-data";
import { useEffect, useRef } from "react";
import { ElementID } from "../../interfaces/constantes";
import { PersonConnection } from "../../interfaces/perso-connection";
import { generateConnectParams } from "../../utils/generateConnectParams";
import "./person.css";
import { useTabtore } from "../../stores/tabStore";

export default function Person({
  source,
  target,
  instance,
  personData,
  targetConnection,
}: {
  source: ElementID;
  target?: ElementID;
  instance: jsPlumbInstance;
  personData: PersonData;
  targetConnection?: PersonConnection;
}) {
  const el = useRef(null);
  const openTab = useTabtore((state: any) => state.openTab);

  useEffect(() => {
    target &&
      targetConnection &&
      instance &&
      instance.connect(generateConnectParams(source, target, targetConnection));
  }, [instance, target, source, targetConnection]);

  return (
    <>
      <div
        ref={el}
        id={source}
        onClick={() => {
          openTab(personData);
        }}
        className={`mx-2 ${
          targetConnection && targetConnection.relation === RELATIONS.EX
            ? "bg-gray-100 opacity-70"
            : "bg-white"
        } px-5 py-3 drop-shadow rounded whitespace-nowrap clickable select-none`}
      >
        {personData.firstname} {personData.lastname}
      </div>
    </>
  );
}
