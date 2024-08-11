import { useEffect } from "react";
import { useState } from "react"

const App = () => {
  const [render,setRender] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRender(r => !r)
    },5000)

    return () => {
      clearInterval(intervalId);
    }
  },[]);

  return (
    <>
      {render ? <MyComponent /> : <div>Hello</div>}
    </>
  )
}

const MyComponent = () => {
  useEffect(() => {
    console.error("Component Mounted")

    return () => {
      console.log("Component Unmounted");
    }
  },[])

  return (
    <div>
      From inside MyComponent
    </div>
  )
}

export default App;