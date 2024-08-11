import { useEffect } from "react";
import { useState } from "react"

const useMousePointer = () => {
  const [position,setPosition] = useState({x : 0,y: 0});

  const handleMoveButton = (e) => {
    setPosition({x: e.clientX,y: e.clientY})
  }

  useEffect(() => {
    window.addEventListener('mousemove',handleMoveButton);

    return () => {
      window.addEventListener('mousemove',handleMoveButton);
    }
  })
  return position;
}

const App = () => {
  const mousePointer = useMousePointer();

  return (
    <>
    Your mouse pointer is {mousePointer.x} {mousePointer.y};
    </>
  )
}

export default App;