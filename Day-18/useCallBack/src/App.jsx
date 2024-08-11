import { useCallback } from "react"
import { useState } from "react"

const ChildComponent = ({onClick}) => {
  console.log('Child Component rendering...')
  return <button onClick={onClick}>Click me</button>
}

const CallBackExample = () => {
  const [count,setCount] = useState(0);

  const handleClick = () => {
    console.log('Button is Clicked!')
    setCount(prevCount => prevCount + 1);
  }
  const memorizedHandleClick = useCallback(handleClick, []);

  return (
    <div>
      <p>Count : {count}</p>
      <ChildComponent onClick={memorizedHandleClick}/>
    </div>
  )
}

export default CallBackExample;

