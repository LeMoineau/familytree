import { useEffect, useRef, useState } from "react";
import { jsPlumb, jsPlumbInstance } from "jsplumb";
import { familyTree } from "../common/data/family-tree";
import Family from "../common/components/Family";
import { getIndexString } from "../common/utils/useIndex";

export default function FamilyTree() {
  const [instance, setInstance] = useState<jsPlumbInstance>();
  const container = useRef(null);

  useEffect(() => {
    const toolkit = jsPlumb.getInstance({
      PaintStyle: {
        strokeWidth: 2,
        stroke: "#567567",
      },
      Connector: ["Flowchart", { curviness: 20 }],
      Endpoint: "Blank",
      Anchors: ["TopCenter", "BottomCenter"],
      Container: container.current,
    });
    setInstance(toolkit);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      instance && instance.repaintEverything();
    });
  });

  return (
    <>
      <div
        ref={container}
        id="drawing"
        className="row justify-center min-w-screen min-h-screen w-fit p-28 border border-gray-200 overflow-hidden bg-white rounded-md"
      >
        {familyTree.map((f) => {
          return (
            <Family
              key={getIndexString()}
              instance={instance!}
              family={f}
            ></Family>
          );
        })}
      </div>
    </>
  );
}
