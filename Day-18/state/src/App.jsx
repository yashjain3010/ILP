import { useState } from "react";

const App = () => {
  const [counter,setCounter] = useState('0');

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter-1);
  }

  return (
    <div>
      <h1>Counter is : {counter}</h1>
      <button onClick={increment}>Increase Count</button>
      <button onClick={decrement}>Decrease Count</button>
    </div>
  )
}

export default App;