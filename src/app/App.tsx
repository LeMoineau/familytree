import Draggable from "react-draggable";
import FamilyTree from "./FamilyTree";
import { useRef } from "react";
import FamilyTab from "./FamilyTab";

function App() {
  const drag = useRef(null);

  // let pointClicked: [number, number] | undefined;
  // let drag = false;
  // useEffect(() => {
  //   window.addEventListener("mousedown", (event: MouseEvent) => {
  //     if (!pointClicked) pointClicked = [event.clientX, event.clientY];
  //     drag = true;
  //     console.log(pointClicked, drag);
  //   });
  //   window.addEventListener("mousemove", (event: MouseEvent) => {
  //     if (drag) {
  //       document.body.style.transform = `translate(${
  //         event.clientX - pointClicked![0]
  //       }px, ${event.clientY - pointClicked![1]}px)`;
  //     }
  //     console.log(drag);
  //   });
  //   window.addEventListener("mouseup", (event) => {
  //     console.log("coucou up");
  //     pointClicked = [event.clientX, event.clientY];
  //     drag = false;
  //   });
  //   document.body.addEventListener("mouseleave", (event) => {
  //     console.log("coucou leave");
  //     pointClicked = [event.clientX, event.clientY];
  //     drag = false;
  //   });
  // }, []);

  return (
    <>
      <FamilyTab></FamilyTab>
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-row bg-gray-100">
        <Draggable nodeRef={drag} cancel=".clickable">
          <div ref={drag} className="w-fit">
            <FamilyTree></FamilyTree>
          </div>
        </Draggable>
      </div>
    </>
  );
}

export default App;
